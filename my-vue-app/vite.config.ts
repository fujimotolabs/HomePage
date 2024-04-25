import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tsConfigPaths from "vite-tsconfig-paths";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 5173,
  },
  plugins: [vue(), tsConfigPaths()],
  base: "/HomePage/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "~": path.resolve(__dirname, "public"),
    },
  },
  build: {
    outDir: "dist", // ビルド成果物の出力先を指定
  },
});
