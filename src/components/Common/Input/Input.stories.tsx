import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Input } from './Input';

export const input = {
  label: 'Label',
  name: 'test',
};

export const actions = {
  onClick: action('onClick'),
};

storiesOf('Input', module).add('full width', () => <Input {...input} />);
