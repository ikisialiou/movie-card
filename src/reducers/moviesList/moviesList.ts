import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_REQUEST_SUCCESS,
  GET_MOVIES_REQUEST_FAILURE,
  MoviesRequestActionType,
} from '../../actions/types';
import { MoviesState } from './types';

const initialState: MoviesState = {
  movies: [],
  error: '',
};

export const moviesList = (state = initialState, action: MoviesRequestActionType): MoviesState => {
  switch (action.type) {
    case GET_MOVIES_REQUEST:
      return {
        ...state,
      };
    case GET_MOVIES_REQUEST_SUCCESS:
      return {
        ...state,
        movies: action.payload.movies,
      };
    case GET_MOVIES_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
