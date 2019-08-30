import * as React from 'react';

import { ButtonEvent } from 'components/Common/Button/Button';
import { RadioButton } from 'components/Common/Radio';
import './SearchPanel.scss';

export type SearchByType = 'title' | 'genres';

interface SearchByProps {
  searchBy: string;
  onChangeSearchParam: (e: SearchParamsEvent) => void;
}

interface SearchParamsEventTarget extends EventTarget {
  value: SearchByType;
}

export interface SearchParamsEvent extends ButtonEvent {
  target: SearchParamsEventTarget;
}

export const SearchBy: React.FC<SearchByProps> = ({ searchBy, onChangeSearchParam }) => {
  const isChecked = (value: string): boolean => searchBy === value;

  return (
    <React.Fragment>
      <span>SEARCH BY</span>
      <RadioButton value="title" checked={isChecked('title')} name="searchParams" onChange={onChangeSearchParam}>
        TITLE
      </RadioButton>
      <RadioButton value="genres" checked={isChecked('genres')} name="searchParams" onChange={onChangeSearchParam}>
        GENRE
      </RadioButton>
    </React.Fragment>
  );
};
