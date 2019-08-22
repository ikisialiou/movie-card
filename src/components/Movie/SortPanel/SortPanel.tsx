import * as React from 'react';
import { Button } from 'components/Common/Button';

interface InfoPanelProps {
  moviesCount: number;
}

export const SortPanel: React.FC<InfoPanelProps> = ({ moviesCount }) => {
  const [sortBy, setSortBy] = React.useState('release_date');

  const onClickSortBy = (e: any): void => {
    const { name } = e.target;
    setSortBy(name);
  };

  return (
    <React.Fragment>
      <span>
        {moviesCount}
        movies found
      </span>
      <span>Sort by</span>
      <Button name="release_date" onClick={onClickSortBy}>
        release date
      </Button>
      <Button name="rating" onClick={onClickSortBy}>
        rating
      </Button>
    </React.Fragment>
  );
};
