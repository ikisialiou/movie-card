export const GET_MOVIES_REQUEST = 'GET_MOVIES_REQUEST';
export const GET_MOVIES_REQUEST_SUCCESS = 'GET_MOVIES_REQUEST_SUCCESS';
export const GET_MOVIES_REQUEST_FAILURE = 'GET_MOVIES_REQUEST_FAILURE';

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

interface MoviesRequestAction {
  type: typeof GET_MOVIES_REQUEST;
}

interface MoviesRequestSuccessAction {
  type: typeof GET_MOVIES_REQUEST_SUCCESS;
  payload: {
    movies: Movie[];
  };
}

interface MoviesRequestFailureAction {
  type: typeof GET_MOVIES_REQUEST_FAILURE;
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

export type MoviesRequestActionType = MoviesRequestAction | MoviesRequestSuccessAction | MoviesRequestFailureAction;

export type MovieRequestActionType = MovieRequestAction | MovieRequestSuccessAction | MovieRequestFailureAction;
