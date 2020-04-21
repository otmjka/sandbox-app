import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import config from './config';
import Entrypoint from './components/Common/Entrypoint/Entrypoint';

function run() {
  ReactDOM.render(
    <React.StrictMode>
      <Entrypoint />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

run();
