import * as React from 'react';
import classNames from 'classnames';

import { Button } from 'components/Common/Button';
import { ButtonColorType, ButtonEvent } from 'components/Common/Button/Button';
import { Input } from 'components/Common/Input';
import * as styles from './SearchPanel.scss';

const cx = classNames.bind(styles);

export type SearchByType = 'title' | 'genres';

interface SearchPanelProps {
  searchBy: string;
  onChangeSearchParam: (e: SearchParamsEvent) => void;
  onClickSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

interface SearchParamsEventTarget extends EventTarget {
  name: SearchByType;
}

export interface SearchParamsEvent extends ButtonEvent {
  target: SearchParamsEventTarget;
}

export const SearchPanel: React.FC<SearchPanelProps> = ({ searchBy, onChangeSearchParam, onClickSearch }) => {
  const getColorButton = (name: string): ButtonColorType => {
    if (searchBy === name) {
      return 'pink';
    }

    return 'gray';
  };

  return (
    <div className={cx('search')}>
      <form onSubmit={onClickSearch}>
        <h2>FIND YOUR MOVIE</h2>
        <Input name="search" />
        <div className={cx('search__params')}>
          <div>
            <span>SEARCH BY</span>
            <Button name="title" caption="TITLE" color={getColorButton('title')} onClick={onChangeSearchParam} />
            <Button name="genres" caption="GENRE" color={getColorButton('genres')} onClick={onChangeSearchParam} />
          </div>
          <div>
            <Button caption="SEARCH" type="submit" color="pink" />
          </div>
        </div>
      </form>
    </div>
  );
};
