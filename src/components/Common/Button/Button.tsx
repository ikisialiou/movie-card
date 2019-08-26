import * as React from 'react';
import classNames from 'classnames';
import './Button.scss';

type ButtonType = 'button' | 'submit';

export interface ButtonEvent extends React.MouseEvent<HTMLElement> {
  [value: string]: any;
}

export interface ButtonProps {
  value?: React.ReactText;
  type?: ButtonType;
  className?: string;
  onClick?: (e: ButtonEvent) => void;
}

export const Button: React.FC<ButtonProps> = ({ children, value, type = 'button', className, onClick }) => (
  <button type={type} value={value} className={classNames('button', className)} onClick={onClick}>
    {children}
  </button>
);
