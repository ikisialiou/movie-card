import * as React from 'react';
import classNames from 'classnames';
import './Button.scss';

export type ButtonColorType = 'gray' | 'pink';

type ButtonType = 'button' | 'submit';

export interface ButtonEvent extends React.MouseEvent<HTMLElement> {
  [name: string]: any;
}

export interface ButtonProps {
  caption: string;
  name?: string;
  type?: ButtonType;
  color?: ButtonColorType;
  onClick?: (e: ButtonEvent) => void;
}

export const Button: React.FC<ButtonProps> = ({ caption, name, type = 'button', color, onClick }) => (
  <button type={type} name={name} className={classNames('button', `button__${color}`)} onClick={onClick}>
    {caption}
  </button>
);
