import * as webpack from 'webpack';
import * as webpackDevServer from 'webpack-dev-server';

export interface IConfiguaration extends webpack.Configuration {
  devServer?: webpackDevServer.Configuration,
}
