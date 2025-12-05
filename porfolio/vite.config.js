import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  base: "/wonyoung-porfolio/",
  build: {
    outDir: "../docs",
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    open: true,
  },
});
