import expect from 'expect';

import * as reducers from 'reducers';

describe('Reducers', () => {

  describe('searchTextReducer', () => {

    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'bubba'
      };
      var res = reducers.searchTextReducer('', action);

      expect(res).toEqual(action.searchText);
    });

  }); // searchTextReducer

});
