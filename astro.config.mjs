import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
// import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://github.com/kputhanangadi/kputhanangadi.github.io",
  integrations: [
    tailwind(),
    mdx(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});