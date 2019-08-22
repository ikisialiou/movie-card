import * as React from 'react';

import { Button } from 'components/Common/Button';
import { ButtonEvent } from 'components/Common/Button/Button';
import { Input } from 'components/Common/Input';
import './SearchPanel.scss';

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
  const getColorButton = (name: string): string => {
    if (searchBy === name) {
      return 'button__pink';
    }

    return 'button__gray';
  };

  return (
    <div className="search">
      <form onSubmit={onClickSearch}>
        <h2>FIND YOUR MOVIE</h2>
        <Input name="search" />
        <div className="search__params">
          <div>
            <span>SEARCH BY</span>
            <Button name="title" className={getColorButton('title')} onClick={onChangeSearchParam}>
              TITLE
            </Button>
            <Button name="genres" className={getColorButton('genres')} onClick={onChangeSearchParam}>
              GENRE
            </Button>
          </div>
          <div>
            <Button type="submit" className="button__pink button__big">
              SEARCH
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
