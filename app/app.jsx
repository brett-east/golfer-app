var React = require('react');
var ReactDOM = require('react-dom');
import {Provider} from 'react-redux';
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import GolferApp from 'GolferApp';


import * as actions from 'actions';
var store = require('configureStore').configure();

store.subscribe(() => {
    console.log('New state', store.getState());
});

store.dispatch(actions.setSearchText('bub'));
store.dispatch(actions.setSearchText('Jord'));

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
