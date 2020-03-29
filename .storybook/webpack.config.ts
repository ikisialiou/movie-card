import custom from '../webpack.dev.config';

interface StoryBookWebpackConf {
  config: any;
  mode: string;
}

const config = async ({ config, mode }: StoryBookWebpackConf) => {
  config.resolve.extensions = custom.resolve.extensions;

  return { ...config, module: { ...config.module, rules: custom.module.rules } };
};

export default config;
