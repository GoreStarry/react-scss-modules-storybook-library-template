import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import vue from "@vitejs/plugin-vue";
import vitePluginRequire from "vite-plugin-require";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [vue(), vueJsx(), vitePluginRequire()],
  // base: "/",
  server: {
    port: 8001,
  },
  build: { outDir: "build" },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
});
