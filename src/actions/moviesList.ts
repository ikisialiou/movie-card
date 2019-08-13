import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { asyncActionCreator } from '../utils/utils';
import {
  Movie,
  MoviesRequestActionType,
  GET_MOVIES_REQUEST,
  GET_MOVIES_REQUEST_SUCCESS,
  GET_MOVIES_REQUEST_FAILURE,
} from './types';

const MOVIES_PATH = '/movies';

export const getMoviesRequest = (): MoviesRequestActionType => ({
  type: GET_MOVIES_REQUEST,
});

export const getMoviesRequestSuccess = (movies: Movie[]): MoviesRequestActionType => ({
  type: GET_MOVIES_REQUEST_SUCCESS,
  payload: {
    movies,
  },
});

export const getMoviesRequestFailure = (error: string): MoviesRequestActionType => ({
  type: GET_MOVIES_REQUEST_FAILURE,
  payload: {
    error,
  },
});

export const loadMovies = (): ThunkAction<Promise<void>, {}, {}, AnyAction> =>
  asyncActionCreator(
    {
      onRequest: getMoviesRequest,
      onSuccess: getMoviesRequestSuccess,
      onFailure: getMoviesRequestFailure,
    },
    {
      path: MOVIES_PATH,
      method: 'get',
    }
  );
