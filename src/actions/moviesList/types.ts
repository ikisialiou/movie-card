import { Action } from 'redux';

export const SEARCH_MOVIES_REQUEST = 'SEARCH_MOVIES_REQUEST';
export const SEARCH_MOVIES_REQUEST_SUCCESS = 'SEARCH_MOVIES_REQUEST_SUCCESS';
export const SEARCH_MOVIES_REQUEST_FAILURE = 'SEARCH_MOVIES_REQUEST_FAILURE';
export const SEARCH_MOVIES_ACTION = 'SEARCH_MOVIES_ACTION';

export const GET_MOVIE_REQUEST = 'GET_MOVIE_REQUEST';
export const GET_MOVIE_REQUEST_SUCCESS = 'GET_MOVIE_REQUEST_SUCCESS';
export const GET_MOVIE_REQUEST_FAILURE = 'GET_MOVIE_REQUEST_FAILURE';

export interface Movie {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  runtime: number;
  genres: string[];
}

interface SearchMoviesRequestAction {
  type: typeof SEARCH_MOVIES_REQUEST;
}

interface SearchMoviesRequestSuccessAction {
  type: typeof SEARCH_MOVIES_REQUEST_SUCCESS;
  payload: {
    movies: Movie[];
  };
}

interface SearchMoviesRequestFailureAction {
  type: typeof SEARCH_MOVIES_REQUEST_FAILURE;
  payload: {
    error: string;
  };
}

interface SearchMoviesParams {
  searchBy: 'title' | 'genres';
  search: string;
}

export interface SearchMoviesActionParams extends Action {
  payload: SearchMoviesParams;
}

export interface SearchMoviesAction {
  type: typeof SEARCH_MOVIES_ACTION;
  payload: SearchMoviesParams;
}

export type SearchMoviesRequestActionType =
  | SearchMoviesRequestAction
  | SearchMoviesRequestSuccessAction
  | SearchMoviesRequestFailureAction;
