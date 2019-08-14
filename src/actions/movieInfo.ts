// import { AnyAction } from 'redux';
// import { ThunkAction } from 'redux-thunk';

// import { asyncActionCreator } from '../utils/utils';
import {
  Movie,
  MovieRequestActionType,
  GET_MOVIE_REQUEST,
  GET_MOVIE_REQUEST_SUCCESS,
  GET_MOVIE_REQUEST_FAILURE,
} from './types';

// const MOVIES_PATH = '/movies';

export const getMovieRequest = (): MovieRequestActionType => ({
  type: GET_MOVIE_REQUEST,
});

export const getMovieRequestSuccess = (movie: Movie): MovieRequestActionType => ({
  type: GET_MOVIE_REQUEST_SUCCESS,
  payload: {
    movie,
  },
});

export const getMovieRequestFailure = (error: string): MovieRequestActionType => ({
  type: GET_MOVIE_REQUEST_FAILURE,
  payload: {
    error,
  },
});

export const loadMovie = () => console.log(11111);

// export const loadMovie = (id: number): ThunkAction<Promise<void>, {}, {}, AnyAction> => asyncActionCreator(
//   {
//     onRequest: getMovieRequest,
//     onSuccess: getMovieRequestSuccess,
//     onFailure: getMovieRequestFailure,
//   },
//   {
//       path: `${MOVIES_PATH}/${id}`,
//       method: 'get',
//   },
// );
