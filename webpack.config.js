/* eslint-disable no-console */
/**************************************************************
	@AUTHOR: Kingsley Nnaji <kingsley.nnaji@gmail.com>
	@LICENSE: MIT
	Creation Date : 19.09.2019
***************************************************************/

const HtmlWebbpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
module.exports = ({mode}) => {
  console.log(mode);

  return {
    mode,
    output: {
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'style-loader' /* creates style nodes from JS strings */,
            'css-loader' /* translates CSS into CommonJS */,
            'sass-loader' /* compiles SASS to CSS */,
          ],
        },
      ],
    },

    plugins: [
      new HtmlWebbpackPlugin({
        template: './src/index.js',
        inject: 'body',
      }),
      new webpack.ProgressPlugin(),
      new MiniCssExtractPlugin({
        chunkFilename: '[name].css',
        filename: '[name].css',
      }),
    ],
  };
};
