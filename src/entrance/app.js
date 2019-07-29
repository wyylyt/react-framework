import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { Provider } from 'react-redux';
import Router from '../containers/Router/Router';
import store from '../containers/Store/index';


import '../mock/index';

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root'),
);
