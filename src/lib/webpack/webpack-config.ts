import * as path from 'path';
import * as HtmlWebPackPlugin from 'html-webpack-plugin';
import { WebpackConfig } from './webpack';

const config: WebpackConfig = {
  entry: path.resolve('src', './index.tsx'),
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    modules: [
      path.resolve('node_modules'),
      path.resolve('src'),
    ],
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
    ],
    alias: {
      components: path.resolve('src', 'components'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        enforce: 'pre',
        test: /\.(ts|tsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'public/index.html',
      inject: 'body',
    }),
  ],
};

export default config;
