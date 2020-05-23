import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app';
import * as serviceWorker from './serviceWorker';
import './assets/css/body.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
