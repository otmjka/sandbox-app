import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import configureRootReducer from './configureRootReducer';
import { verifyAuth } from '../actions';

function computeEnchancers() {
  const isProduction = process.env.NODE_ENV !== 'production';
  const reduxDevtoolsExtensionCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  const isWindowObject = typeof window === 'object';

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  return isProduction && isWindowObject && reduxDevtoolsExtensionCompose
    ? reduxDevtoolsExtensionCompose
    : compose;
}

export default function configureStoreGlobal(
  initialState = undefined,
  { history },
) {
  const middlewares = [thunk];
  if (history) {
    middlewares.push(routerMiddleware(history));
  }

  const enhancers = [applyMiddleware(...middlewares)];
  const composeEnhancers = computeEnchancers();

  const rootReducer = configureRootReducer({ history });

  const store = createStore(rootReducer, initialState, composeEnhancers(...enhancers));
  // await store.dispatch(verifyAuth());
  return store;
}
