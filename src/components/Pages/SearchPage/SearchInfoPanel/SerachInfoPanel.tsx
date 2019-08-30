import * as React from 'react';
import { useSelector } from 'react-redux';

import { InfoPanel } from 'components/InfoPanel';
import { SortBy } from 'components/Movie/SortBy';
import { MoviesCountInfo } from 'components/Movie/MoviesCountInfo';
import { Movie } from 'actions/moviesList/types';
import { State } from 'config/types';

export const SerachInfoPanel: React.FC<{}> = () => {
  const movies = useSelector((state: State): Movie[] => state.moviesList.movies);

  return movies.length ? (
    <InfoPanel left={<MoviesCountInfo moviesCount={movies.length} />} right={<SortBy />} />
  ) : (
    <InfoPanel />
  );
};
