var path = require("path");
module.exports = {
  outputDir: path.resolve(__dirname, "./build"),
  configureWebpack: {
    resolve: {
      modules: [path.resolve("./src"), path.resolve("./node_modules")],
    },
  },
};
