import { defineConfig, normalizePath } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import autoprefixer from "autoprefixer";

const variablePath = normalizePath(
  resolve(__dirname, "./src/styles/variable.scss")
);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${variablePath}";`,
      },
    },
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ["Chrome > 40", "ff > 31", "ie 11"],
        }),
      ],
    },
  },
});
