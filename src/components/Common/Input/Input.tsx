import * as React from 'react';

import './Input.scss';

interface ButtonProps {
  label?: string;
  name: string;
}

export const Input: React.FC<ButtonProps> = ({ label, name }) => (
  <React.Fragment>
    {label && <label>{label}</label>}
    <input name="name" className="input" />
  </React.Fragment>
);
