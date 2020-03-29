import { Movie } from '../../actions/types';

export interface MoviesState {
  movies: Movie[];
  error: string;
}
