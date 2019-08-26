import * as React from 'react';

import { Button } from 'components/Common/Button';
import { ButtonEvent } from 'components/Common/Button/Button';
import { RadioButton } from 'components/Common/Radio';
import { Input } from 'components/Common/Input';
import './SearchPanel.scss';

export type SearchByType = 'title' | 'genres';

interface SearchPanelProps {
  searchBy: string;
  onChangeSearchParam: (e: SearchParamsEvent) => void;
  onClickSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

interface SearchParamsEventTarget extends EventTarget {
  value: SearchByType;
}

export interface SearchParamsEvent extends ButtonEvent {
  target: SearchParamsEventTarget;
}

export const SearchPanel: React.FC<SearchPanelProps> = ({ searchBy, onChangeSearchParam, onClickSearch }) => {
  const isChecked = (value: string): boolean => searchBy === value;

  return (
    <div className="search">
      <form onSubmit={onClickSearch}>
        <h2>FIND YOUR MOVIE</h2>
        <Input name="search" />
        <div className="search__params">
          <div>
            <span>SEARCH BY</span>
            <RadioButton value="title" checked={isChecked('title')} name="searchParams" onChange={onChangeSearchParam}>
              TITLE
            </RadioButton>
            <RadioButton
              value="genres"
              checked={isChecked('genres')}
              name="searchParams"
              onChange={onChangeSearchParam}
            >
              GENRE
            </RadioButton>
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
