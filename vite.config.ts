import { defineConfig, normalizePath } from "vite";
import react from "@vitejs/plugin-react-swc";
import autoprefixer from "autoprefixer";
import path from "path";

const variablePath = normalizePath(path.resolve("./src/variables.scss"));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
        ],
      },
    },
  },
});