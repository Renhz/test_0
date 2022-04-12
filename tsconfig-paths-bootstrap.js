// https://gist.github.com/jmcdo29/6276920d3dcbc1161c32a7a9a461f9c1
const tsconfigPaths = require('tsconfig-paths');

const config = require('./tsconfig.json');

tsconfigPaths.register({
  baseUrl: config.compilerOptions.baseUrl,
  paths: config.compilerOptions.paths,
});
