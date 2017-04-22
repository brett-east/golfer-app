export var filterGolfers = (players, searchText) => {
    var filteredGolfers = players;
    filteredGolfers = filteredGolfers.filter((player) => {
      if (searchText.length < 1) {
        return true;
      }
      return player.name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0;
    });
    return filteredGolfers;
  };
