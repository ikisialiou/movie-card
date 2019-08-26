import { call, put, takeEvery } from 'redux-saga/effects';

import { apiRequest } from '../../utils/utils';
import { SEARCH_MOVIES_ACTION, SearchMoviesActionParams } from './types';
import { searchMoviesRequest, searchMoviesRequestSuccess, searchMoviesRequestFailure } from './actions';

const MOVIES_PATH = '/movies';

function* searchMoviesAction(action: SearchMoviesActionParams): any {
  const { searchBy, search, sortBy } = action.payload;
  yield put(searchMoviesRequest());
  try {
    const json = yield call(apiRequest, {
      path: `${MOVIES_PATH}?searchBy=${searchBy}&search=${search}&sortBy=${sortBy}&sortOrder=desc`,
      method: 'get',
    });
    yield put(searchMoviesRequestSuccess(json.data));
  } catch (err) {
    yield put(searchMoviesRequestFailure(err));
  }
}

export function* watchSearchMovies(): any {
  yield takeEvery(SEARCH_MOVIES_ACTION, searchMoviesAction);
}
