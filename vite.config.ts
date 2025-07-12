import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/my-portfolio-website/", // <-- Your GitHub repo name here
  build: {
    outDir: "dist",
  },
});
