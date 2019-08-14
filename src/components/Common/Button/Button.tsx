import * as React from 'react';
import classNames from 'classnames';
import * as styles from './Button.scss';

export type ButtonColorType = 'gray' | 'pink';
type ButtonType = 'button' | 'submit';

export interface ButtonEvent extends React.MouseEvent<HTMLElement> {
  [name: string]: any;
}

interface ButtonProps {
  caption: string;
  name?: string;
  type?: ButtonType;
  color?: ButtonColorType;
  className?: string;
  onClick?: (e: ButtonEvent) => void;
  rest?: {
    [name: string]: string;
  };
}

const cx = classNames.bind(styles);

export const Button: React.FC<ButtonProps> = ({
  caption,
  name,
  color = 'gray',
  type = 'button',
  className,
  onClick,
}) => (
  <button type={type} name={name} className={cx('button', color, className)} onClick={onClick}>
    {caption}
  </button>
);
