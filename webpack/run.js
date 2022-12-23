let mode = "dev";
let runStyle = "build";
let colors = true;

process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";
console.log(process.argv);

for (let arg of process.argv) {
  switch (arg) {
    case "--dev":
      mode = "dev";
      colors = false;
      process.env.BABEL_ENV = "development";
      process.env.NODE_ENV = "development";
      break;
    case "--prod":
      mode = "prod";
      colors = false;
      process.env.BABEL_ENV = "production";
      process.env.NODE_ENV = "production";
      break;
    case "--start":
      runStyle = "start";
      process.env.SEP_CSS = "";
      break;
    case "--build":
      runStyle = "build";
      process.env.SEP_CSS = "sep";
      break;
  }
}

const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");

const config = require(`./config/webpack.${mode}.conf.js`);

const compiler = webpack(config);

if (runStyle == "build") {
  compiler.run((err, status) => {
    if (err) {
      console.error(err);
      return;
    }

    let result = status.toString({
      chunks: true,
      colors,
      chunkModules: false,
      modules: false,
    });
    console.log(result);
  });
} else {  
  const devServerOptions = { ...config.devServer, open: true };

  const server = new WebpackDevServer(devServerOptions, compiler);

  const runServer = async () => {
    console.log("Starting server...");
    await server.start();
  };

  runServer();
}
