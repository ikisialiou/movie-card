import * as React from 'react';

import { InfoPanel } from '../InfoPanel';
import { MovieCard } from './MovieCard';
import { SortPanel } from './SortPanel';
import { Movie } from '../../actions/types';
import './MoviesList.scss';

interface MoviesListProps {
  movies?: Movie[];
}

export const MoviesList: React.FC<MoviesListProps> = ({ movies = [] }) => (
  <main>
    <InfoPanel>{movies.length ? <SortPanel moviesCount={movies.length} /> : null}</InfoPanel>

    <section>
      <div className="movies-list">
        {movies.length ? movies.map(movie => <MovieCard key={movie.id} movie={movie} />) : 'No films found'}
      </div>
    </section>
  </main>
);
