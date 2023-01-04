const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const toml = require("toml");
const yaml = require("yamljs");
const json5 = require("json5");

const rootPath = require("./root-path");

const sepCSS = process.env.SEP_CSS == "sep";

module.exports = {
  mode: "development",
  devtool: "source-map",
  stats: {
    chunkModules: false,
    modules: false,
    colors: true,
  },
  entry: {
    main: rootPath.getPath("src/main.js"),
  },
  output: {
    filename: "[name].[contenthash].js",
    path: rootPath.getPath("dist"),
    clean: true,
    library: "$KC",
  },
  resolve: {
    alias: {
      "src/common": rootPath.getPath("src", "common"),
      "src/axios": rootPath.getPath("src", "axios"),
      "src/view": rootPath.getPath("src", "view"),
      "@parts": rootPath.getPath("src", "common", "parts"),
    },
    extensions: [".js", ".jsx", ".css", ".scss"],
    fallback: {
      path: false,
      fs: false,
      crypto: false,
    },
  },
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 2000,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              [
                "@babel/plugin-transform-react-jsx",
                {
                  runtime: "automatic",
                  importSource: "@keithwang/keith-babel-jsx",
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          sepCSS ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: "global",
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              postcssOptions: {
                config: rootPath.getPath(
                  "webpack",
                  "config",
                  "postcss.config.js"
                ),
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              additionalData: `@import "src/common/scss/variables.scss";`,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          sepCSS ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: "global",
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                sourceMap: true,
                config: rootPath.getPath(
                  "webpack",
                  "config",
                  "postcss.config.js"
                ),
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "resource/image/[hash][ext][query]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "resource/font/[hash][ext][query]",
        },
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ["csv-loader"],
        generator: {
          filename: "resource/txt/[hash][ext][query]",
        },
      },
      {
        test: /\.xml$/i,
        use: ["xml-loader"],
        generator: {
          filename: "resource/xml/[hash][ext][query]",
        },
      },
      {
        test: /\.toml$/i,
        type: "json",
        parser: {
          parse: toml.parse,
        },
        generator: {
          filename: "resource/json/[hash][ext][query]",
        },
      },
      {
        test: /\.yaml$/i,
        type: "json",
        parser: {
          parse: yaml.parse,
        },
        generator: {
          filename: "resource/yaml/[hash][ext][query]",
        },
      },
      {
        test: /\.json5$/i,
        type: "json",
        parser: {
          parse: json5.parse,
        },
        generator: {
          filename: "resource/json5/[hash][ext][query]",
        },
      },
    ],
  },
  devServer: {
    static: rootPath.getPath("dist"),
    hot: true,
    allowedHosts: ["0.0.0.0", "localhost"],
    open: true,
    port: 80,
  },
  performance: {
    maxEntrypointSize: 1200000, // 入口点代表将在特定条目的初始加载时间期间使用的所有资产。此选项控制 webpack 何时应根据最大入口点大小（以字节为单位）发出性能提示。
    maxAssetSize: 500000, // 资产是从 webpack 发出的任何文件, webpack 何时根据单个资产大小（以字节为单位）发出性能提示
  },
  optimization: {
    minimize: false,
    splitChunks: {
      minSize: 20000,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "keith",
      template: "index.html",
      scriptLoading: "blocking",
      inject: "body",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: rootPath.getPath("static"),
          to: rootPath.getPath("dist/static"),
          toType: "dir",
          context: rootPath.root,
          filter: async (resourcePath) => {
            return true;
          },
        },
      ],
    }),
  ].concat(
    sepCSS
      ? [
          new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css",
            ignoreOrder: true,
          }),
          new CompressionPlugin(),
        ]
      : []
  ),
};
