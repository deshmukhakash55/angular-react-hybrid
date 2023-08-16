import { defineConfig } from "vite";
import commonjs from "vite-plugin-commonjs";
import react from "@vitejs/plugin-react";
import pugPlugin from "vite-plugin-pug";
import pug from "rollup-plugin-pug";

export default defineConfig({
  plugins: [pugPlugin(), commonjs(), react({ include: /\.tsx$/ })],
  resolve: [".js", ".tsx", ".pug", ".html", ".scss"],
  mode: "development",
  build: {
    minify: false,
    rollupOptions: {
      plugins: [pug()],
    },
    assetsDir: "",
  },
});
