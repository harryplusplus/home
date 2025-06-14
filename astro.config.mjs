// @ts-check
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";
import { defineConfig, fontProviders } from "astro/config";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx({
      remarkPlugins: [remarkToc],
    }),
  ],
  adapter: vercel(),
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Roboto",
        cssVariable: "--font-roboto",
        weights: [400, 700],
        display: "block",
      },
    ],
  },
});
