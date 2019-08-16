import * as path from 'path';
import { WebpackConfig } from './webpack';

const config: WebpackConfig = {
  devServer: {
    contentBase: path.resolve('public'),
    compress: true,
    port: 3000,
  },
};

export default config;
