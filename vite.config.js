import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      features: path.resolve(__dirname, "./src/features/"),
      shared: path.resolve(__dirname, "./src/shared/"),
      styles: path.resolve(__dirname, "./src/styles/"),
      app: path.resolve(__dirname, "./src/app/"),
    },
  },
});
