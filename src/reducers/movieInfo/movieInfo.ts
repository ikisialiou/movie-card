import {
  GET_MOVIE_REQUEST,
  GET_MOVIE_REQUEST_SUCCESS,
  GET_MOVIE_REQUEST_FAILURE,
  MovieRequestActionType,
} from '../../actions/types';

import { MovieState } from './types';

const initialState: MovieState = {
  movie: {},
  error: '',
};

export const movieInfo = (state = initialState, action: MovieRequestActionType): MovieState => {
  switch (action.type) {
    case GET_MOVIE_REQUEST:
      return {
        ...state,
      };
    case GET_MOVIE_REQUEST_SUCCESS:
      return {
        ...state,
        movie: action.payload.movie,
      };
    case GET_MOVIE_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
