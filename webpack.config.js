/* eslint-disable no-console */
/**************************************************************
	@AUTHOR: Kingsley Nnaji <kingsley.nnaji@gmail.com>
	@LICENSE: MIT
	Creation Date : 19.09.2019
***************************************************************/

const HtmlWebbpackPlugin = require('html-webpack-plugin');
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
              loader: 'style-loader', // creates style nodes from JS strings
            },
            {
              loader: 'css-loader', // translates CSS into CommonJS
            },
            {
              loader: 'sass-loader', // compiles SASS to CSS
            },
          ],
        },
      ],
    },

    plugins: [new HtmlWebbpackPlugin(), new webpack.ProgressPlugin()],
  };
};
