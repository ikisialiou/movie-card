import * as React from 'react';
import { RadioLink } from 'components/Common/Radio';
import { SortByContext } from './SortByStore';
import './SortBy.scss';

export const SortBy: React.FC<{}> = () => {
  const { sortBy, onClickSortBy } = React.useContext(SortByContext);

  const isChecked = (value: string): boolean => value === sortBy;

  return (
    <div className="sort-by">
      <span className="sort-by__text">Sort by</span>
      <RadioLink
        value="release_date"
        className="sort-by__radio"
        checked={isChecked('release_date')}
        name="sort"
        onChange={onClickSortBy}
      >
        release date
      </RadioLink>
      <RadioLink
        value="vote_average"
        className="sort-by__radio"
        checked={isChecked('vote_average')}
        name="sort"
        onChange={onClickSortBy}
      >
        rating
      </RadioLink>
    </div>
  );
};
