import * as React from 'react';
import { useSelector } from 'react-redux';

import { Movie } from 'actions/types';
import { MoviesList } from '../components/Movie';
import { State } from '../config/types';

export const MoviesListContainer: React.FC<{}> = () => {
  const movies = useSelector((state: State): Movie[] => state.moviesList.movies);

  return <MoviesList movies={movies} />;
};
