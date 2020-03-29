import { Movie } from '../../actions/types';

export interface MovieState {
  movie: {} | Movie;
  error: string;
}
