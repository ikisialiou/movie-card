import * as React from 'react';

import { Movie } from '../../../actions/types';
import './MovieCard.scss';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => (
  <div className="movie-card">
    <img src={movie.poster_path} alt="Film poster" className="movie-card__poster" />
    <span>{movie.title}</span>
    <span>{movie.release_date}</span>
    <p>{movie.genres.join(' & ')}</p>
  </div>
);
