module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
 
    svgRule.uses.clear();
 
    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');

    config.plugin("html").tap((args) => {
      args[0].title = "Shubham Kamath";
      return args;
    });
  },
  devServer: {
    port: 8081,
    host: "0.0.0.0",
  },
};
