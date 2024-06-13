import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { viteMockServe } from "vite-plugin-mock";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      // 创建svg的插件
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]",
      }),
      //保证模拟时可以开启
      viteMockServe({
        localEnabled: command === "serve", //保证开发阶段可以使用mock接口
      }),
    ],

    css: {
      // css预处理器
      preprocessorOptions: {
        scss: {
          // 引入 mixin.scss 这样就可以在全局中使用 mixin.scss中预定义的变量了
          // 给导入的路径最后加上 ;
          javascriptEnabled: true,
          additionalData: `
           @import "@/styles/global.scss";
            `,
        },
      },
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
