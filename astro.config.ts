import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://northstardata.co",
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
});
