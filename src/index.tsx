import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import './index.css';
import config from './config';
import Entrypoint from './components/Common/Entrypoint/Entrypoint';
import configureStore from './common/configureStore';

function run() {
  const history = createBrowserHistory();

  const store = configureStore(undefined, {
    history
  });

  ReactDOM.render(
    <React.StrictMode>
      <Entrypoint history={history} store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

run();
