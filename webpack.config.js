const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugi = require("@pmmmwh/react-refresh-webpack-plugin");

const isDEvelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDEvelopment ? "development" : "production",
  devtool: isDEvelopment ? "eval-source-map" : "source-map",
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  devServer: {
    liveReload: true,
    hot: true,
    // contentBase:path.resolve(__dirname, 'public')
  },
  plugins: [
    isDEvelopment && new ReactRefreshWebpackPlugi(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.(j|t)sx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              isDEvelopment && require.resolve("react-refresh/babel"),
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
