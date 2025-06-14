// @ts-check
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import { defineConfig, fontProviders } from "astro/config";
import rehypeMermaid from "rehype-mermaid";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx({
      syntaxHighlight: {
        type: "shiki",
        excludeLangs: ["mermaid"],
      },
      remarkPlugins: [remarkToc],
      rehypePlugins: [rehypeMermaid],
    }),
    react(),
  ],
  adapter: vercel(),
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Roboto",
        cssVariable: "--font-roboto",
        weights: [400, 700],
      },
    ],
  },
});
