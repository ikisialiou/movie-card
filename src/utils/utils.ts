import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { API_HOST } from '../config/config';
import { Actions, RequestOptions } from './types';

export const asyncActionCreator = (
  actions: Actions,
  passedOptions: RequestOptions
): ThunkAction<Promise<void>, {}, {}, Action> => {
  return (dispatch: any) => {
    dispatch(actions.onRequest());

    return fetch(`${API_HOST}${passedOptions.path}`, {
      method: passedOptions.method,
    })
      .then(response => {
        if (!response.ok) {
          return Promise.reject(new Error('An error occurs during request'));
        }

        return response.json();
      })
      .then(response => dispatch(actions.onSuccess(response.data)))
      .catch(err => dispatch(actions.onFailure(err)));
  };
};
