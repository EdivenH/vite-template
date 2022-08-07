import { defineConfig, normalizePath } from "vite";
import vue from "@vitejs/plugin-vue";
import { join, resolve } from "path";
import autoprefixer from "autoprefixer";
import svgLoader from "vite-svg-loader";
import viteImagemin from "vite-plugin-imagemin";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import vueJsx from "@vitejs/plugin-vue-jsx";

const variablePath = normalizePath(
  resolve(__dirname, "./src/styles/variable.scss")
);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    svgLoader({
      defaultImport: "url",
    }),
    viteImagemin({
      optipng: {
        optimizationLevel: 7,
      },
      pngquant: {
        quality: [0.8, 0.9],
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
    }),
    createSvgIconsPlugin({
      iconDirs: [join(__dirname, "src/assets/svg")],
    }),
  ],
  resolve: {
    alias: {
      "@assets": join(__dirname, "src/assets"),
    },
  },
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
