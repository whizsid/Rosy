const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

const config = {
  devtool: "inline-source-map",
  mode,
  entry: {
    background: "./src/ts/background.ts",
    content: "./src/ts/content.ts"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["@babel/plugin-transform-classes"]
          }
        }
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new CopyWebpackPlugin(["src/manifest.json", "src/icons/*.png"], {
      to: "dist"
    })
  ]
};

module.exports = config;
