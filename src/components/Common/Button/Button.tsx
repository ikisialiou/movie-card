import * as React from 'react';
import classNames from 'classnames';
import * as styles from './Button.scss';

export type ButtonColorType = 'gray' | 'pink';

export interface ButtonEvent extends React.MouseEvent<HTMLElement> {
  [name: string]: any;
}

interface ButtonProps {
  caption: string;
  name: string;
  color?: ButtonColorType;
  className?: string;
  onClick?: (e: ButtonEvent) => void;
  rest?: {
    [name: string]: string;
  };
}

const cx = classNames.bind(styles);

export const Button: React.FC<ButtonProps> = ({ caption, name, color = 'gray', className, onClick }) => (
  <button type="button" name={name} className={cx('button', color, className)} onClick={onClick}>
    {caption}
  </button>
);
