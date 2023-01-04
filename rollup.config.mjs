/* eslint-disable import/no-anonymous-default-export */
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";
import babel from "rollup-plugin-babel";
import del from "rollup-plugin-delete";
import replace from "rollup-plugin-replace";
import createVuePlugin3 from "rollup-plugin-vue";
import createVuePlugin2 from "rollup-plugin-vue2";
import { isVue2, version } from "vue-demi";
import ScriptSetup from "unplugin-vue2-script-setup/rollup";

import packageJson from "./package.json" assert { type: "json" };

import { getDistDir } from "./scripts/utils.mjs";

console.log("=====rollup isVue2=====", isVue2);

const defaultSettings = {
  external: ["vue", "vue-demi"],
  plugins: [
    peerDepsExternal(),
    // vue({
    //   css: true, // Dynamically inject css as a <style> tag
    //   compileTemplate: true, // Explicitly convert template to render function
    // }),
    isVue2 ? ScriptSetup() : undefined,
    isVue2
      ? createVuePlugin2({
          css: false,
        })
      : createVuePlugin3({ preprocessStyles: true }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    resolve({
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
    terser(),
    babel(),
  ],
};

export default [
  {
    input: "src/lib.js",
    output: [
      {
        file: getDistDir(version) + "index.es.js",
        format: "es",
        globals: {
          jquery: "$",
        },
      },
      {
        file: getDistDir(version) + "index.cjs.js",
        format: "cjs",
        exports: "default",
        globals: {
          vue: "Vue",
        },
      },
      {
        file: getDistDir(version) + "index.umd.js",
        format: "umd",
        name: "bundle",
        globals: {
          vue: "Vue",
        },
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
