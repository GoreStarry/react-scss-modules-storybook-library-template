import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginRequire from "vite-plugin-require";

export default defineConfig({
  plugins: [react(), vitePluginRequire()],
  // base: "/",
  server: {
    port: 8001,
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
});
