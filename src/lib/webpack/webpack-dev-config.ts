import { WebpackConfig } from './webpack';

const config: WebpackConfig = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-modules-typescript-loader',
          'css-loader',
          'sass-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'source-map',
};

export default config;
