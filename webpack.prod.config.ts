import * as merge from 'webpack-merge';
import baseConfig from './src/lib/webpack/webpack-config';
import prodConfig from './src/lib/webpack/webpack-prod-config';
import { WebpackConfig } from './src/lib/webpack/webpack';

const config: WebpackConfig = merge(
  baseConfig,
  prodConfig
);

export default config;
