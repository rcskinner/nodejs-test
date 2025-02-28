import { build } from "esbuild";

build({
  entryPoints: ["src/index.js"],
  outfile: "dist/bundle.js",
  platform: "node",
  format: "esm",
  bundle: true,
  sourcemap: true,
})
  .then(() => console.log("Build successful!"))
  .catch(() => process.exit(1));
