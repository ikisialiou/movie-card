import * as React from 'react';

import { InfoPanel } from '../InfoPanel';
import { MovieCard } from './MovieCard';
import { Movie } from '../../actions/types';
import './MoviesList.scss';

interface MoviesListProps {
  movies?: Movie[];
}

export const MoviesList: React.FC<MoviesListProps> = ({ movies = [] }) => (
  <React.Fragment>
    <InfoPanel moviesCount={movies.length} />

    <div>
      <div className="movies-list">
        {movies.length ? movies.map(movie => <MovieCard key={movie.id} movie={movie} />) : 'No films found'}
      </div>
    </div>
  </React.Fragment>
);
