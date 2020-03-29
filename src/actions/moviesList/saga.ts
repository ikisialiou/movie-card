import { call, put, takeEvery } from 'redux-saga/effects';

import { API } from 'services/fetch';
import { SEARCH_MOVIES_ACTION, SearchMoviesActionParams } from './types';
import { searchMoviesRequest, searchMoviesRequestSuccess, searchMoviesRequestFailure } from './actions';

function* searchMoviesSaga(action: SearchMoviesActionParams): any {
  yield put(searchMoviesRequest());
  try {
    const { data } = yield call(API.fetchMovies, action.payload);
    yield put(searchMoviesRequestSuccess(data.data));
  } catch (err) {
    yield put(searchMoviesRequestFailure(err));
  }
}

export function* watchSearchMovies(): any {
  yield takeEvery(SEARCH_MOVIES_ACTION, searchMoviesSaga);
}
