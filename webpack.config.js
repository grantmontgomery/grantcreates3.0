const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  context: __dirname,
  resolve: {
    extensions: ["*", ".js", ".ts"],
    modules: [__dirname, "src", "node_modules"],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName:
                  process.env.NODE_ENV === "development"
                    ? "[name]__[local]--[hash:base64:5]"
                    : "[hash:base64:5]",
              },
            },
          },
        ],
      },
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
};
