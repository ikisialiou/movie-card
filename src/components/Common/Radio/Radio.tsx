import * as React from 'react';
import classNames from 'classnames';

import { RadionProps } from './Types';

export const Radio: React.FC<RadionProps> = ({ children, value, name, className, onChange }) => (
  <label className={classNames('radio', className)}>
    <input type="radio" name={name} className="radio__input" value={value} onChange={onChange} />
    <span>{children}</span>
  </label>
);
