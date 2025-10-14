import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// 获取当前仓库名
const repoName = path.basename(process.cwd());

export default defineConfig(({ mode }) => ({
  plugins: [tailwindcss(), vue()],
  base: mode === "production" ? `/` : "/",
  base: mode === "production" ? `/${repoName}/` : "/",
}));
