import * as React from 'react';

import { ButtonEvent } from 'components/Common/Button/Button';
import { Input } from 'components/Common/Input';
import './SearchPanel.scss';
import { SearchButton } from './SearchButton';
import { SearchBy } from './SearchBy';

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
  return (
    <div className="search">
      <form onSubmit={onClickSearch}>
        <h2>FIND YOUR MOVIE</h2>
        <Input name="search" />
        <div className="search__params">
          <div>
            <SearchBy searchBy={searchBy} onChangeSearchParam={onChangeSearchParam} />
          </div>
          <div>
            <SearchButton />
          </div>
        </div>
      </form>
    </div>
  );
};
