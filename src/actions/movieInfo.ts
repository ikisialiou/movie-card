import {
  Movie,
  MovieRequestActionType,
  GET_MOVIE_REQUEST,
  GET_MOVIE_REQUEST_SUCCESS,
  GET_MOVIE_REQUEST_FAILURE,
} from './types';

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
