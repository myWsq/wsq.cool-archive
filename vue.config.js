const VueAutoRoutingPlugin = require("vue-auto-routing/lib/webpack-plugin");
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  lintOnSave: false,
  configureWebpack: config => {
    if (isProd) {
      config.externals = {
        vue: "Vue",
        "vue-router": "VueRouter",
        vuex: "Vuex",
        "element-ui": "ELEMENT"
      };
    }
  },
  chainWebpack: config => {
    config.plugin("vue-auto-routing").use(VueAutoRoutingPlugin, [
      {
        pages: "src/pages",
        nested: true
      }
    ]);
  },

  publicPath: "./"
};
