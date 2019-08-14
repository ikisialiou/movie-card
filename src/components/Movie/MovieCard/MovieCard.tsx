import * as React from 'react';
import classNames from 'classnames';

import { Movie } from '../../../actions/types';
import * as styles from './MovieCard.scss';

const cx = classNames.bind(styles);

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => (
  <div className={cx('movie-card')}>
    <img src={movie.poster_path} alt="Film poster" className={cx('movie-card__poster')} />
    <span>{movie.title}</span>
    <span>{movie.release_date}</span>
    <p>{movie.genres.join(' & ')}</p>
  </div>
);
