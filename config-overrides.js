const { injectBabelPlugin } = require("react-app-rewired");
const rewireLess = require("react-app-rewire-less");

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ["import", { libraryName: "antd", style: true }],
    config
  );

  // change importing css to less
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      "@font-family": '"Josefin Sans", "sans-serif"',
      "@layout-header-background": "#2D364C",
      "@body-background": "#F6F8FA",
      "@text-color": "#434D57",
      "@font-size-base": "16px",
      "@layout-header-height": "50px",
      "@layout-header-padding": 0,
      "@border-radius-base": 0,
      "@border-radius-sm": 0
    },
    javascriptEnabled: true
  })(config, env);
  return config;
};
