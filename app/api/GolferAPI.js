export var filterGolfers = (players, searchText) => {
    var filteredGolfers = players;
    filteredGolfers = filteredGolfers.filter((player) => {
      var name = player.first_name + player.last_name;
      if (searchText.length < 1) {
        return true;
      }
      return name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0;
    });
    return filteredGolfers;
  };
