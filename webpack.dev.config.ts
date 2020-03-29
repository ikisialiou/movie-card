import * as merge from 'webpack-merge';
import baseConfig from './src/lib/webpack/webpack-config';
import devConfig from './src/lib/webpack/webpack-dev-config';
import devServerConfig from './src/lib/webpack/webpack-dev-server-config';
import { WebpackConfig } from './src/lib/webpack/webpack';

const config: WebpackConfig = merge(
  baseConfig,
  devConfig,
  devServerConfig
);

export default config;
