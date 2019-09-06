import * as React from 'react';
import * as PropTypes from 'prop-types';

import { MovieCard } from './MovieCard';
import { EmptyList } from './EmptyList';
import { Movie } from '../../actions/types';
import './MoviesList.scss';

const propTypes = {
  movies: PropTypes.array.isRequired,
};

const displayMovies = (movies: Movie[]): JSX.Element[] =>
  movies.map(movie => <MovieCard key={movie.id} movie={movie} />);

export const MoviesList: React.FC<PropTypes.InferProps<typeof propTypes>> = ({ movies }) => {
  return (
    <section>
      <div className="movies-list">{movies.length ? displayMovies(movies) : <EmptyList />}</div>
    </section>
  );
};

MoviesList.propTypes = propTypes;
