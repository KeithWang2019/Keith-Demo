"use strict";

const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const rootPath = require("./root-path");
const config = require("./webpack.config.js");

const webpackConfig = webpackMerge.merge(config, {
  mode: "development",
  optimization: {
    minimize: false,
  },
  devtool: "inline-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": require(rootPath.getPath("env", "dev.env")),
    }),
  ],
});

module.exports = webpackConfig;
