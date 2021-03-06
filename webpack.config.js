const path = require("path");

module.exports = {
  entry: {
    blog: "./src/pages/blog/index.ts",
    home: "./src/pages/home/index.ts",
  },
  mode: "development",
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
        test: /\.(js)?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(ts)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  resolve: {
    extensions: ["*", ".js", ".ts"],
    modules: [__dirname, "src", "node_modules"],
  },
};
