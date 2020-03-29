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

interface MovieRequestAction {
  type: typeof GET_MOVIE_REQUEST;
}

interface MovieRequestSuccessAction {
  type: typeof GET_MOVIE_REQUEST_SUCCESS;
  payload: {
    movie: Movie;
  };
}

interface MovieRequestFailureAction {
  type: typeof GET_MOVIE_REQUEST_FAILURE;
  payload: {
    error: string;
  };
}

export type SearchMoviesRequestActionType =
  | SearchMoviesRequestAction
  | SearchMoviesRequestSuccessAction
  | SearchMoviesRequestFailureAction;

export type MovieRequestActionType = MovieRequestAction | MovieRequestSuccessAction | MovieRequestFailureAction;
