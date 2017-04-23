import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';


import {GolferSearch} from 'GolferSearch';

describe('GolferSearch', () => {
  it('should exist', () => {
    expect(GolferSearch).toExist();
  });

  it('should dispatch SET_SEARCH_TEXT on input change', () => {
  var searchText = 'Dog';
  var action = {
    type: 'SET_SEARCH_TEXT',
    searchText: searchText
  }
  var spy = expect.createSpy();
  var golferSearch = TestUtils.renderIntoDocument(<GolferSearch dispatch={spy}/>);

  golferSearch.refs.searchText.value = searchText;
  TestUtils.Simulate.change(golferSearch.refs.searchText);

  expect(spy).toHaveBeenCalledWith(action);
});

});
