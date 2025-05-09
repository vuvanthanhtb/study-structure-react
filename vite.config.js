import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      modules: path.resolve(__dirname, "./src/modules/"),
      shared: path.resolve(__dirname, "./src/shared/"),
      styles: path.resolve(__dirname, "./src/styles/"),
      app: path.resolve(__dirname, "./src/app/"),
    },
  },
});
