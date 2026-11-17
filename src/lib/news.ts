import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"news">;

// All posts, newest first.
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("news");
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export const postUrl = (post: Post) => `/news/${post.id}/`;
