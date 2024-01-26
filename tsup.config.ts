import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["src/**/*.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  outDir: "out/",
});
