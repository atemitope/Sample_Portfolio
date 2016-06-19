var webpack = require("webpack");

module.exports = {
  entry: "./assets/js/src/app.js",
  output: {
    path: "assets/js/dist",
    filename: "app.min.js",
    publicPath: "assets/js/dist"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        exclude: "node_modules",
        query: {
          compact: false,
          presets: ["es2015", "react"]
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ]
};
