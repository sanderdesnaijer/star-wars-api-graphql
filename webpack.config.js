const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: ["react-hot-loader/patch", "./src/index.jsx"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.gql?$/,
        loader: "webpack-graphql-loader"
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    //new ExtractTextPlugin("style.css"),
    new webpack.HotModuleReplacementPlugin()
    //new ExtractTextPlugin("styles.css")
  ],
  devServer: {
    contentBase: "./",
    hot: true,
    open: true
  }
};
