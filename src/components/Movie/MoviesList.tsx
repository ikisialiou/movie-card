import * as React from 'react';

import { InfoPanel } from '../InfoPanel';
import { Movie } from '../../actions/types';

interface MoviesListProps {
  movies?: Movie[];
}

export const MoviesList: React.FC<MoviesListProps> = ({ movies = [] }) => (
  <React.Fragment>
    <InfoPanel moviesCount={movies.length} />

    <div>{movies.length ? movies.map(movie => <div key={movie.id}>{movie.title}</div>) : 'No films found'}</div>
  </React.Fragment>
);
