var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/Speech/SpeechSynthesizer.js",
  output: {
    path: path.resolve("build"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  resolve: {
    alias: {
      react: path.resolve("./node_modules/react"),
    },
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        loader: "css-loader",
      },
    ],
  },
  externals: {
    react: "react",
  },
};
