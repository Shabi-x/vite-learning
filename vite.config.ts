import { defineConfig, normalizePath } from "vite";
import react from "@vitejs/plugin-react-swc";
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
    },
  },
});
