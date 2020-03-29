import { combineReducers } from 'redux';

import { moviesList } from './moviesList/moviesList';
import { movieInfo } from './movieInfo/movieInfo';

export const app = combineReducers({
  moviesList,
  movieInfo,
});
