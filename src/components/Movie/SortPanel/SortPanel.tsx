import * as React from 'react';
import { RadioLink } from 'components/Common/Radio';
import { SortPanelContext } from './SortPanelStore';

interface InfoPanelProps {
  moviesCount: number;
}

export const SortPanel: React.FC<InfoPanelProps> = ({ moviesCount }) => {
  const { sortBy, onClickSortBy } = React.useContext(SortPanelContext);

  const isChecked = (value: string): boolean => value === sortBy;

  return (
    <React.Fragment>
      
      <RadioLink value="release_date" checked={isChecked('release_date')} name="sort" onChange={onClickSortBy}>
        release date
      </RadioLink>
      <RadioLink value="vote_average" checked={isChecked('vote_average')} name="sort" onChange={onClickSortBy}>
        rating
      </RadioLink>
    </React.Fragment>
  );
};
