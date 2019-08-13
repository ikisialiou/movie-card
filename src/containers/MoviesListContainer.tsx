import * as React from 'react';
import { connect } from 'react-redux';

import { MoviesList } from '../components/Movie';
import { IState } from '../config/types';
import { MoviesListStateProps, MoviesListProps } from './types';

const connector = connect<MoviesListStateProps, {}, {}>(
  (state: IState): MoviesListStateProps => ({
    movies: state.moviesList.movies,
  })
);

const MoviesListContainer: React.FC<MoviesListProps> = ({ movies }) => <MoviesList movies={movies} />;

export const ConnectedMoviesListContainer = connector(MoviesListContainer);
