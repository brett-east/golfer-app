import expect from 'expect';

import * as actions from 'actions';

describe('Actions', () => {
  it('should generate searchText action', () => {
    var action = {
      type: 'SET_SERACH_TEXT',
      searchText: 'bubba'
    };
    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });
});
