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
      "@body-background": "#F2F2F6",
      "@text-color": "#3E465B",
      "@font-size-base": "16px",
      "@layout-header-height": "50px",
      "@layout-header-padding": 0
    },
    javascriptEnabled: true
  })(config, env);
  return config;
};
