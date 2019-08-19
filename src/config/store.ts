import { AnyAction, applyMiddleware, compose, createStore, Store } from 'redux';
import { logger } from 'redux-logger';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import { app } from '../reducers';
import { State } from './types';

const middlewares: ThunkMiddleware[] = [thunk];
let composeEnhancers: typeof compose = compose;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
  composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export const store: Store<State, AnyAction> = createStore(app, composeEnhancers(applyMiddleware(...middlewares)));
