import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import config from '../lib/config';

export default function configureStore(initialState) {

  const middlewareArgs = config.get('isProduction') ? [thunkMiddleware] : [thunkMiddleware, createLogger()];

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware.apply(null, middlewareArgs)
  )

  return store;
}
