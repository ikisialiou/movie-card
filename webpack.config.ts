import * as path from 'path';
import * as HtmlWebPackPlugin from 'html-webpack-plugin';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import { IConfiguaration } from './webpack.common';

const config: IConfiguaration = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'src'),
    ],
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
    ],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        enforce: 'pre',
        test: /\.(ts|tsx)$/,
        loader: 'tslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'public/index.html',
      inject: 'body',
    }),
    new CopyWebpackPlugin([
      {
        context: './src/images',
        from: '**/*',
        to: './images',
      },
    ]),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    compress: true,
    port: 3000,
  },
};

export default config;
