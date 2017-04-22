export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var getPlayers = (players) => {
  return {
    type: 'GET_PLAYERS',
    players
  };
};
