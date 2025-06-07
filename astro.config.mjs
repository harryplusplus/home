// @ts-check
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
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
