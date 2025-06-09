// @ts-check
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import { defineConfig, fontProviders } from "astro/config";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx({
      remarkPlugins: [remarkToc],
    }),
    react(),
  ],
  adapter: vercel(),
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "EB Garamond",
        cssVariable: "--font-eb-garamond",
        weights: [400, 700],
      },
    ],
  },
});
