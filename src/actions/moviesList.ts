import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { asyncActionCreator } from '../utils/utils';
import {
  Movie,
  SearchMoviesRequestActionType,
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_REQUEST_SUCCESS,
  SEARCH_MOVIES_REQUEST_FAILURE,
} from './types';

const MOVIES_PATH = '/movies';

export const searchMoviesRequest = (): SearchMoviesRequestActionType => ({
  type: SEARCH_MOVIES_REQUEST,
});

export const searchMoviesRequestSuccess = (movies: Movie[]): SearchMoviesRequestActionType => ({
  type: SEARCH_MOVIES_REQUEST_SUCCESS,
  payload: {
    movies,
  },
});

export const searchMoviesRequestFailure = (error: string): SearchMoviesRequestActionType => ({
  type: SEARCH_MOVIES_REQUEST_FAILURE,
  payload: {
    error,
  },
});

export const searchMovies = (
  searchBy: 'title' | 'genres',
  search: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> =>
  asyncActionCreator(
    {
      onRequest: searchMoviesRequest,
      onSuccess: searchMoviesRequestSuccess,
      onFailure: searchMoviesRequestFailure,
    },
    {
      path: `${MOVIES_PATH}?searchBy=${searchBy}&search=${search}`,
      method: 'get',
    }
  );
