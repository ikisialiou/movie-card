import {
  Movie,
  SearchMoviesRequestActionType,
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_REQUEST_SUCCESS,
  SEARCH_MOVIES_REQUEST_FAILURE,
  SEARCH_MOVIES_ACTION,
  SearchMoviesAction,
} from './types';

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

export const searchMovies = (searchBy: 'title' | 'genres', search: string, sortBy: string): SearchMoviesAction => ({
  type: SEARCH_MOVIES_ACTION,
  payload: {
    searchBy,
    search,
    sortBy,
  },
});
