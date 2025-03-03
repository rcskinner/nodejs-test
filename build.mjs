import esbuild from 'esbuild';
import ddPlugin from 'dd-trace/esbuild.js';

esbuild.build({
  entryPoints: ["src/index.js"],
  outfile: "dist/bundle.js",
  platform: "node",
  format: "esm",
  bundle: true,
  sourcemap: true,
  plugins: [ddPlugin],
  external: [
    // required if you use native metrics
    '@datadog/native-metrics',

    // required if you use profiling
    '@datadog/pprof',

    // required if you use Datadog security features
    '@datadog/native-appsec',
    '@datadog/native-iast-taint-tracking',
    '@datadog/native-iast-rewriter',

    // required if you encounter graphql errors during the build step
    'graphql/language/visitor',
    'graphql/language/printer',
    'graphql/utilities',
    
    //External App Dependencies 
    'express',
    'pino',

  ]
})
  .then(() => console.log("Build successful!"))
  .catch(() => process.exit(1));
