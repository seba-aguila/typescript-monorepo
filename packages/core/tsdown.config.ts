import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    "db-refs": "src/db-refs.ts",
    firebase: "src/firebase.ts",
    "utils/index": "src/utils/index.ts",
  },
  clean: false,
  format: ["esm"],
  target: "es2022",
  sourcemap: true,
  treeshake: true,
  dts: true,
  exports: false,
  unbundle: true,
  platform: "node",
  logLevel: "error",
});
