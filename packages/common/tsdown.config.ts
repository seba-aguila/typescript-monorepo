import { defineConfig } from "tsdown";

export default defineConfig({
  entry: "src/index.ts",
  clean: false,
  format: ["esm"],
  target: "es2022",
  sourcemap: true,
  treeshake: true,
  dts: true,
  exports: false,
  unbundle: true,
  logLevel: "error",
});
