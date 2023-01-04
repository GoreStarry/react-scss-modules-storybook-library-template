/* eslint-disable import/no-anonymous-default-export */
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";
import del from "rollup-plugin-delete";
import replace from "rollup-plugin-replace";
import createVuePlugin3 from "rollup-plugin-vue";
import createVuePlugin2 from "rollup-plugin-vue2";
import { isVue2, version } from "vue-demi";

import packageJson from "./package.json" assert { type: "json" };

import { getDistDir } from "./scripts/utils.mjs";

console.log("=====rollup isVue2=====", isVue2);

function vueTransformPlugin(isVue2) {
  return {
    resolveId(source) {
      if (/vue-demi/.test(source)) {
        if (isVue2) {
          return "./node_modules/vue-demi/lib/v2.7/index.mjs";
        } else {
          return "./node_modules/vue-demi/lib/v3/index.mjs";
        }
      }
    },
  };
}

const babelOptions = isVue2
  ? {
      presets: ["@babel/preset-env", "@vue/babel-preset-jsx"],
      exclude: "**/node_modules/**",
    }
  : {
      presets: ["@babel/preset-env"],
      exclude: "**/node_modules/**",
      plugins: ["@vue/babel-plugin-jsx"],
    };

const defaultSettings = {
  external: ["vue-demi"],
  plugins: [
    peerDepsExternal(),
    // vue({
    //   css: true, // Dynamically inject css as a <style> tag
    //   compileTemplate: true, // Explicitly convert template to render function
    // }),
    // isVue2 ? ScriptSetup() : undefined,
    createVuePlugin2({
      css: false,
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    resolve({
      extensions: [".vue"], // 无后缀名引用时，需要识别 .vue 文件
      alias: {
        // 别名引入路径
        vue: isVue2
          ? resolve("../../../node_modules/vue2")
          : resolve("../../../node_modules/vue3"),
      },
    }),
    commonjs({
      // include: /node_modules/
    }),

    // del({ targets: ["dist/*"] }),
    postcss({
      modules: true,
      extract: false,
      // writeDefinitions: true,
      // inject: true,
    }),
    image(),
    json(),
    babel(babelOptions),
    vueTransformPlugin(isVue2),
    terser(),
  ],
};

export default [
  {
    input: "src/examples/Button.jsx",
    output: [
      {
        file: getDistDir(version) + "index.es.js",
        format: "es",
      },
      {
        file: getDistDir(version) + "index.cjs.js",
        format: "cjs",
        exports: "default",
      },
      {
        file: getDistDir(version) + "index.umd.js",
        format: "umd",
        name: "bundle",
      },
    ],
    ...defaultSettings,
  },
  // {
  //   input: "src/script.js",
  //   output: [
  //     {
  //       file: "dist/gltfDisplayer.js",
  //       format: "iife", // for header script
  //       sourcemap: true,
  //     },
  //   ],
  //   ...defaultSettings,
  // },
];
