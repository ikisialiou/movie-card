import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Radio } from './Radio';
import './Radio.scss';

export const radioButton = {
  name: 'radio',
  value: 'Some value',
};

export const actions = {
  onChange: action('onClick'),
};

storiesOf('Radion/Buttons', module)
  .add('Unchecked', () => (
    <Radio className="radio__button" {...radioButton} {...actions}>
      Unchecked
    </Radio>
  ))
  .add('Checked', () => (
    <Radio className="radio__button radio__button--checked" {...radioButton} {...actions}>
      Checked
    </Radio>
  ));

storiesOf('Radion/Link', module)
  .add('Unchecked', () => (
    <Radio className="radio__link" {...radioButton} {...actions}>
      Unchecked
    </Radio>
  ))
  .add('Checked', () => (
    <Radio className="radio__link radio__link--checked" {...radioButton} {...actions}>
      Unchecked
    </Radio>
  ));
