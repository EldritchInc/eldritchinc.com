import type { APIRoute } from "astro";
import { site } from "../../data/site";
import { getPosts, postUrl } from "../../lib/news";

const escape = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

export const GET: APIRoute = async ({ site: siteUrl }) => {
  const base = siteUrl ?? new URL(site.url);
  const posts = await getPosts();

  const items = posts
    .map((post) => {
      const link = new URL(postUrl(post), base).toString();
      return `    <item>
      <title>${escape(post.data.title)}</title>
      <link>${link}</link>
      <guid>${link}</guid>
      <pubDate>${post.data.date.toUTCString()}</pubDate>
      <description>${escape(post.data.description)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Eldritch News</title>
    <link>${new URL("/news/", base).toString()}</link>
    <description>Azathoth releases and Eldritch news.</description>
    <language>en-us</language>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
};
