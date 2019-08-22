import * as React from 'react';
import classNames from 'classnames';
import './Button.scss';

type ButtonType = 'button' | 'submit';

export interface ButtonEvent extends React.MouseEvent<HTMLElement> {
  [name: string]: any;
}

export interface ButtonProps {
  name?: string;
  type?: ButtonType;
  className?: string;
  onClick?: (e: ButtonEvent) => void;
}

export const Button: React.FC<ButtonProps> = ({ children, name, type = 'button', className, onClick }) => (
  <button type={type} name={name} className={classNames('button', className)} onClick={onClick}>
    {children}
  </button>
);
