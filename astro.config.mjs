import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://eldritchinc.com",
  integrations: [sitemap()],
});