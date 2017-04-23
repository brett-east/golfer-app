var React = require('react');
var ReactDOM = require('react-dom');
import {Provider} from 'react-redux';

import GolferApp from 'GolferApp';


import * as actions from 'actions';
var store = require('configureStore').configure();

// Load foundation
$(document).foundation();

// App.css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <GolferApp/>
  </Provider>,
  document.getElementById('app')
);
