import { applyMiddleware, compose, createStore } from 'redux';
import createLogger from 'redux-logger';
import effects from 'redux-effects';

import feathers from './common/feathers-middleware';
import rootReducer, {initialState} from './reducer';


export default () => {
  const loggerMiddleware = createLogger();

  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        effects,
        feathers,
        loggerMiddleware
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
  );
};
