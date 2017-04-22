import * as redux from 'redux';

import {searchTextReducer, playerReducer} from 'reducers';

export var configure = () => {
  var reducer = redux.combineReducers({ // only one reducer at the moment
    searchText: searchTextReducer,
    players: playerReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
}
