import * as webpack from 'webpack';
import * as webpackDevServer from 'webpack-dev-server';

interface WebpackDevServerConfig extends webpack.Configuration {
  devServer?: webpackDevServer.Configuration
}

export type WebpackConfig = webpack.Configuration | WebpackDevServerConfig;
