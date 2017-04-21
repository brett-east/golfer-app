import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';


import GolferSearch from 'GolferSearch';
import GolferApp from 'GolferApp';

describe('GolferSearch', () => {
  it('should exist', () => {
    expect(GolferSearch).toExist();
  });

  var players = [{
    name: 'Bubba Watson',
    age: 33,
    nationality: 'USA',
    fedexPoints: -230,
    fedexRank: 4,
    careerEarnings: 132232,
    id: 123
  },
  {
    name: 'Jordan Speith',
    age: 27,
    nationality: 'USA',
    fedexPoints: -230,
    fedexRank: 4,
    careerEarnings: 134123,
    id: 234
  }];

  it('should return all golfers if searchText is empty', () => {
    var golferApp = new GolferApp;
    var filteredGolfers = golferApp.filterGolfers(players, '');
    expect(filteredGolfers.length).toBe(2);
  });

  it('should filter golfers by searchText', () => {
    var golferApp = new GolferApp;
    var filteredGolfers = golferApp.filterGolfers(players, 'Bubba');
    console.log(filteredGolfers);
    expect(filteredGolfers.length).toBe(1);
  });

  it('should filter with case insensitive text', () => {
    var golferApp = new GolferApp;
    var filteredGolfers = golferApp.filterGolfers(players, 'jordan');
    console.log(filteredGolfers);
    expect(filteredGolfers.length).toBe(1);
  });

});
