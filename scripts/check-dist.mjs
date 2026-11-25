// Checks the built site in dist/ before it ships: run after `npm run build`.
//
// - Every internal link and image reaches a built file, and every #anchor
//   an id on the page it names.
// - Every Netlify form is one site.ts names, and submits its own name.
// - Every news post is in the sitemap and the RSS feed; /thanks is in neither.
// - Every block of structured data is JSON.
//
// It reads only dist/ and src/, and exits with status 1 on any problem.

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const DIST = "dist";
const problems = [];

function pages(directory) {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);

    if (statSync(path).isDirectory()) return pages(path);

    return path.endsWith(".html") ? [path] : [];
  });
}

const built = pages(DIST);
const ids = new Map(
  built.map((page) => [page, new Set([...read(page).matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]))]),
);

function read(path) {
  return readFileSync(path, "utf8");
}

function unescape(text) {
  return text.replaceAll("&amp;", "&").replaceAll("&#39;", "'").replaceAll("&quot;", '"');
}

function resolve(url, page) {
  const [path, fragment = ""] = url.split("#");
  const bare = path.split("?")[0];
  let file = bare === "" ? page : join(DIST, bare);

  if (bare.endsWith("/") || (existsSync(file) && statSync(file).isDirectory())) {
    file = join(file, "index.html");
  }

  return { file, fragment };
}

// Links and images

for (const page of built) {
  for (const [, raw] of read(page).matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = unescape(raw);

    if (!url.startsWith("/") || url.startsWith("//")) continue;

    const { file, fragment } = resolve(url, page);

    if (!existsSync(file)) {
      problems.push(`${relative(DIST, page)} links to ${url}, which was not built`);
    } else if (fragment && file.endsWith(".html") && !ids.get(file)?.has(fragment)) {
      problems.push(`${relative(DIST, page)} links to ${url}, but that page has no id "${fragment}"`);
    }
  }

  for (const [, fragment] of read(page).matchAll(/href="#([^"]+)"/g)) {
    if (!ids.get(page).has(fragment)) {
      problems.push(`${relative(DIST, page)} links to #${fragment}, which it has no id for`);
    }
  }
}

// Forms

const site = read(join("src", "data", "site.ts"));
const named = new Set(
  [...site.matchAll(/^\s+(?:releaseNotes|earlyAccess): "([^"]+)",$/gm)].map((m) => m[1]),
);

for (const page of built) {
  for (const [form] of read(page).matchAll(/<form[^>]*data-netlify[\s\S]*?<\/form>/g)) {
    const name = form.match(/\bname="([^"]+)"/)?.[1];
    const submits = form.match(/name="form-name" value="([^"]+)"/)?.[1];

    if (!named.has(name)) {
      problems.push(`${relative(DIST, page)} has a form "${name}" that site.ts does not name`);
    }
    if (submits !== name) {
      problems.push(`${relative(DIST, page)}'s form "${name}" submits as "${submits}"`);
    }
  }
}

// Sitemap and feed

const sitemap = read(join(DIST, "sitemap-0.xml"));
const feed = read(join(DIST, "news", "rss.xml"));
const posts = readdirSync(join("src", "content", "news"))
  .filter((name) => name.endsWith(".md"))
  .map((name) => name.slice(0, -".md".length));

for (const post of posts) {
  if (!sitemap.includes(`/news/${post}/`)) problems.push(`the sitemap leaves out /news/${post}/`);
  if (!feed.includes(`/news/${post}/`)) problems.push(`the RSS feed leaves out /news/${post}/`);
}

if (sitemap.includes("/thanks")) problems.push("the sitemap lists /thanks");
if (feed.includes("/thanks")) problems.push("the RSS feed lists /thanks");

// Structured data

for (const page of built) {
  for (const [, blob] of read(page).matchAll(
    /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
  )) {
    try {
      JSON.parse(blob);
    } catch (error) {
      problems.push(`${relative(DIST, page)} has structured data that is not JSON: ${error.message}`);
    }
  }
}

if (problems.length > 0) {
  for (const problem of problems) console.error(problem);
  process.exit(1);
}

console.log(
  `Checked ${built.length} pages, ${named.size} forms and ${posts.length} posts: nothing wrong.`,
);
