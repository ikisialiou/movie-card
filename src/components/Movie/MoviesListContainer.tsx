import * as React from 'react';
import { useSelector } from 'react-redux';
import { MoviesList } from 'components/Movie/MoviesList';
import { State } from 'config/types';
import { Movie } from 'actions/moviesList/types';

export const MoviesListContainer: React.FC<{}> = () => {
  const movies = useSelector((state: State): Movie[] => state.moviesList.movies);

  return <MoviesList movies={movies} />;
};
