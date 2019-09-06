import axios from 'axios';
import { SearchMoviesParams } from 'actions/moviesList/types';
import { API_HOST } from 'config/config';

const MOVIES_PATH = '/movies';

export const API = {
  fetchMovies: ({ searchBy, search, sortBy }: SearchMoviesParams) => {
    return axios({
      url: `${MOVIES_PATH}?searchBy=${searchBy}&search=${search}&sortBy=${sortBy}&sortOrder=desc`,
      method: 'GET',
      baseURL: API_HOST,
    });
  },
};
