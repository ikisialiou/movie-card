import * as React from 'react';

import { RadionProps, RadioGroupProps, ControlledRadioProps } from './Types';
import './Radio.scss';

export const radioGroup = (
  WrappedComponent: React.ComponentType<RadionProps | ControlledRadioProps>
): React.FC<RadioGroupProps> => {
  const RadioComponent: React.FC<RadioGroupProps> = ({ params, defaultValue, onChange, ...rest }) => {
    const [activeRadio, setActiveRadio] = React.useState(defaultValue);

    const onChangeRadio = (e: any): void => {
      const { value } = e.target;

      setActiveRadio(value);
      onChange(e);
    };

    const isChecked = (value: string): boolean => activeRadio === value;

    return (
      <React.Fragment>
        {params.map(({ value, title }) => (
          <WrappedComponent key={value} value={value} checked={isChecked(value)} onChange={onChangeRadio} {...rest}>
            {title}
          </WrappedComponent>
        ))}
      </React.Fragment>
    );
  };

  return RadioComponent;
};
