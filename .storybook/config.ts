import { configure, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';

addParameters({
  options: {
    theme: themes.dark,
  },
});

const req = require.context('../src', true, /\.stories.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
