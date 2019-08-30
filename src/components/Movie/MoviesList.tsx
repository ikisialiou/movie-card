import * as React from 'react';
import { useSelector } from 'react-redux';

import { State } from '../../config/types';
import { MovieCard } from './MovieCard';
import { Movie } from '../../actions/types';
import './MoviesList.scss';

const EmptyList: React.FC<{}> = (): JSX.Element => <div className="empty-list">No Films Found</div>;

const displayMovies = (movies: Movie[]): JSX.Element[] =>
  movies.map(movie => <MovieCard key={movie.id} movie={movie} />);

export const MoviesList: React.FC<{}> = () => {
  const movies = useSelector((state: State): Movie[] => state.moviesList.movies);

  return (
    <section>
      <div className="movies-list">{movies.length ? displayMovies(movies) : <EmptyList />}</div>
    </section>
  );
};
