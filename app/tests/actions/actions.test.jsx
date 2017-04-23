import expect from 'expect';

import * as actions from 'actions';

describe('Actions', () => {
  it('should generate searchText action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'bubba'
    };
    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it('should generate getPlayers action', () => {
    var action = {
      type: 'GET_PLAYERS',
      players: [{
        first_name: 'Dustin'
      }, {
        first_name: 'Rory'
      }]
    };
    var res = actions.getPlayers(action.players);
    expect(res).toEqual(action);
  });

});
