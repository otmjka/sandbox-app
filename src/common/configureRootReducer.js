import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import * as reducers from '../reducers';

export default function configureRootReducer({ history }) {
  const rootReducer = combineReducers({
    ...history ? {
      router: connectRouter(history),
    } : {},
    ...reducers
  });

  return rootReducer;
}
