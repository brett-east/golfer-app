import {players} from 'rankedPlayers';

export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
}

export var playerReducer = (state = players, action) => {
  switch (action.type) {
    case 'GET_PLAYERS':
      return action.players;
    default:
      return state;
  }
}
