import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
      "@pages": fileURLToPath(
        new URL("./src/components/pages", import.meta.url)
      ),
      "@util": fileURLToPath(new URL("./src/components/util", import.meta.url)),
      "@authorization": fileURLToPath(
        new URL("./src/components/authorization", import.meta.url)
      ),
    },
  },
});
