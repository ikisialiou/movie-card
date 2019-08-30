import * as React from 'react';
import classNames from 'classnames';

import { RadionProps, ControlledRadioProps } from './Types';
import './Radio.scss';

export const withPrefix = (
  WrappedComponent: React.ComponentType<RadionProps>,
  prefix: string
): React.FC<ControlledRadioProps> => {
  const RadioComponent: React.FC<ControlledRadioProps> = ({ children, checked, className, ...rest }) => {
    const checkedStyle = `${prefix}--checked`;
    const radioClass = classNames({
      [prefix]: prefix,
      [checkedStyle]: checked,
      [className]: className,
    });

    return (
      <WrappedComponent className={radioClass} {...rest}>
        {children}
      </WrappedComponent>
    );
  };

  return RadioComponent;
};
