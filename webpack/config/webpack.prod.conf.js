"use strict";

const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const rootPath = require("./root-path");
const config = require("./webpack.config.js");

const webpackConfig = webpackMerge.merge(config, {
  mode: "production",
  devServer: {
    proxy: {
      "/DemoRest": {
        target: `https://demo.cangsg.com`,
      },
    },
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": require(rootPath.getPath("env", "prod.env.js")),
    }),
  ],
});

module.exports = webpackConfig;
