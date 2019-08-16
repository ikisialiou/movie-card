import * as path from 'path';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import * as StyleLintPlugin from 'stylelint-webpack-plugin';
import * as MiniCssExtractPlugin  from 'mini-css-extract-plugin';
import { WebpackConfig } from './webpack';

const config: WebpackConfig = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: './src/images',
        from: '**/*',
        to: './images',
      },
    ]),
    new StyleLintPlugin({
      files: ['src/**/*.scss']
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};

export default config;
