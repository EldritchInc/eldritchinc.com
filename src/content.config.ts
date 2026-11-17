import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// News posts: one Markdown file per post in src/content/news.
// The file name (without .md) is the post's URL slug.
const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    // Git tag of the Azathoth release this post covers, e.g. "v1.4.0".
    release: z.string().optional(),
    // Install line shown at the end of the post.
    install: z.string().optional(),
    // Show the azathoth-team early access form on this post.
    earlyAccess: z.boolean().default(false),
  }),
});

export const collections = { news };
