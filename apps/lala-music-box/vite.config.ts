import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [autoprefixer]
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    },
    extensions: [".js", ".ts", ".vue", ".json"]
  },
  root: "",
  build: {
    outDir: "../portfolio/projects/lala-music-box"
  },
  // eslint-disable-next-line no-undef
  // base: process.env.NODE_ENV === "production" ? "./" : "/",
});
