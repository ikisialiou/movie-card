import * as React from 'react';
import classNames from 'classnames';

import { Movie } from '../../../actions/types';
import './MovieCard.scss';

interface MovieCardProps {
  movie: Movie;
  className?: string;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, className }) => (
  <div className={classNames('movie-card', className)}>
    <img src={movie.poster_path} alt="Film poster" className="movie-card__poster" />
    <span>{movie.title}</span>
    <span>{movie.release_date}</span>
    <p>{movie.genres.join(' & ')}</p>
  </div>
);
