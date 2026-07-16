import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // If you deploy to GitHub Pages as a PROJECT page
  // (https://<username>.github.io/<repo-name>/), change this to:
  //   base: "/<repo-name>/",
  // If you deploy to Vercel, Netlify, a custom domain, or a GitHub Pages
  // USER/ORG page (https://<username>.github.io/), leave this as "./".
  base: "./",
});
