import {
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_REQUEST_SUCCESS,
  SEARCH_MOVIES_REQUEST_FAILURE,
  SearchMoviesRequestActionType,
} from '../../actions/types';
import { MoviesState } from './types';

const initialState: MoviesState = {
  movies: [],
  error: '',
};

export const moviesList = (state = initialState, action: SearchMoviesRequestActionType): MoviesState => {
  switch (action.type) {
    case SEARCH_MOVIES_REQUEST:
      return {
        ...state,
      };
    case SEARCH_MOVIES_REQUEST_SUCCESS:
      return {
        ...state,
        movies: action.payload.movies,
      };
    case SEARCH_MOVIES_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
