import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  root: path.resolve(import.meta.dirname),
  plugins: [react()],
  resolve: {
    alias: {
      "@/": path.resolve(import.meta.dirname, "src") + "/",
    },
  },
  server: {
    port: 4200,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    target: "es2020",
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
        },
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
    sourcemap: false,
  },
});
