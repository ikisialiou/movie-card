import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from './Button';

export const button = {
  caption: 'Button',
};

export const actions = {
  onClick: action('onClick'),
};

storiesOf('Button', module)
  .add('gray', () => (
    <Button className="button__gray" {...actions}>
      Gray Btn
    </Button>
  ))
  .add('pink', () => (
    <Button className="button__pink" {...button} {...actions}>
      Pink Btn
    </Button>
  ))
  .add('big', () => (
    <Button className="button__pink button__big" {...actions}>
      Big Btn
    </Button>
  ));
