import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/contents/posts" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.optional(z.string()),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/contents/projects" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.optional(z.string()),
  }),
});

export const collections = { posts, projects };
