import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// 获取当前仓库名
const repoName = path.basename(process.cwd());

export default defineConfig(({ mode }) => ({
  plugins: [tailwindcss(), vue()],
  base: "./",
  build: {
    assetsInlineLimit: 4096, // 4kb 以下的资源内联
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && /\.(woff|woff2|ttf)$/.test(assetInfo.name)) {
            return 'assets/fonts/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
}));
