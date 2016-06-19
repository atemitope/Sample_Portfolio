var webpack = require("webpack"),
    config = require("./webpack.config.js"),
    prodConfig = Object.assign({}, config);

prodConfig.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })
);

module.exports = prodConfig;
