const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  context: __dirname,
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
};
