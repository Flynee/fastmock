const { injectBabelPlugin, paths } = require("react-app-rewired")
const rewireLess = require("react-app-rewire-less")
const rewireAliases = require("react-app-rewire-aliases")
const { override, useEslintRc, addWebpackAlias } = require("customize-cra")
const path = require("path")
module.exports = function override(config, env) {
  // config = injectBabelPlugin(
  //   ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], config
  // );

  config = useEslintRc(path.resolve(__dirname, ".eslintrc"))(config, env)

  config = addWebpackAlias({
    "@": path.resolve(__dirname, `${paths.appSrc}/`),
    "@components": path.resolve(__dirname, `${paths.appSrc}/components/`),
  })(config, env)

  // config = rewireAliases.aliasesOptions({
  // '@': path.resolve(__dirname, `${paths.appSrc}/`),
  // '@components': path.resolve(__dirname, `${paths.appSrc}/components/`)
  // })(config, env);
  // config = rewireLess.withLoaderOptions({
  //   modifyVars: { '@primary-color': '#4452d5', '@link-color': '#4452d5' },
  //   javascriptEnabled: true
  // })(config, env);

  return config
}

// module.exports = override(
//   useEslintRc(path.resolve(__dirname, '.eslintrc'))
// );
