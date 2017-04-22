import expect from 'expect';

import {filterGolfers} from 'GolferAPI';


describe('GolferAPI', () => {

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
    var filteredGolfers = filterGolfers(players, '');
    expect(filteredGolfers.length).toBe(2);
  });

  it('should filter golfers by searchText', () => {
    var filteredGolfers = filterGolfers(players, 'Bubba');
    expect(filteredGolfers.length).toBe(1);
  });

  it('should filter with case insensitive text', () => {
    var filteredGolfers = filterGolfers(players, 'jordan');
    expect(filteredGolfers.length).toBe(1);
  });

});
