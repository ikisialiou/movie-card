import * as React from 'react';
import { RadioLinkGroup } from 'components/Common/Radio';
import { SortByContext } from './SortByStore';
import './SortBy.scss';

export const SortBy: React.FC<{}> = () => {
  const { sortBy, onClickSortBy } = React.useContext(SortByContext);

  return (
    <div className="sort-by">
      <span className="sort-by__text">Sort by</span>
      <RadioLinkGroup
        className="sort-by__radio"
        onChange={onClickSortBy}
        name="sort"
        defaultValue={sortBy}
        params={[
          {
            value: 'release_date',
            title: 'release date',
          },
          {
            value: 'vote_average',
            title: 'rating',
          },
        ]}
      />
    </div>
  );
};
