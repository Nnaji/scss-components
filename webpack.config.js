/* eslint-disable no-console */
/**************************************************************
	@AUTHOR: Kingsley Nnaji <kingsley.nnaji@gmail.com>
	@LICENSE: MIT
	Creation Date : 19.09.2019
***************************************************************/
const webpack = require('webpack');
const HtmlWebbpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = env => {
  console.log(env);

  return {
    mode: env.mode,
    output: {
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader' /* creates style nodes from JS strings */,
            MiniCssExtractPlugin.loader,
            'css-loader' /* translates CSS into CommonJS */,
            'sass-loader' /* compiles SASS to CSS */,
          ],
        },
      ],
    },

    plugins: [
      new HtmlWebbpackPlugin({
        template: './src/html-template/template.html',
        title: 'Hello World',
      }),
      new webpack.ProgressPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[name].css',
      }),
    ],
  };
};
