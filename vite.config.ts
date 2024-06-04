import { defineConfig, normalizePath } from "vite";
import react from "@vitejs/plugin-react-swc";
// import viteEslint from "vite-plugin-eslint";
import autoprefixer from "autoprefixer";
import path, { resolve } from "path";
import svgr from "vite-plugin-svgr";

const variablePath = normalizePath(path.resolve("./src/variables.scss"));
const isProduction = process.env.NODE_ENV === "production";
const CDN_URL = "https://cdn.xxxxx.com";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {   
    alias:{
      '@assets': path.join(__dirname, 'src/assets'),
    }
  },
  plugins: [react(),svgr()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import"${variablePath}"`,
      },
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: ["Chrome >= 40", "ff>31", "ie>11"],
          }),
          // viteEslint(),
        ],
      },
    },
  },
});