module.exports = {
  chainWebpack: (config) => {
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
