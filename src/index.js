import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';

import reducer from './reducer';
import Navigation from './Navigation';
import './index.css';

const store = createStore(reducer, applyMiddleware(thunk, ReduxLogger));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Navigation />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
