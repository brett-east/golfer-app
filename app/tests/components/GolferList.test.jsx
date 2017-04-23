import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';


import {GolferList} from 'GolferList';
import GolferProfile from 'GolferProfile';

describe('GolferList', () => {
  it('should exist', () => {
    expect(GolferList).toExist();
  });

  it('should render one GolferProfile for each player', () => {
    var state = {
      searchText: '',
      players: [{
      first_name: 'Bubba',
      last_name: 'Watson',
      age: 33,
      nationality: 'USA',
      fedexPoints: -230,
      fedexRank: 4,
      careerEarnings: 132232,
      id: 123
    },
    {
      first_name: 'Jordan',
      last_name: 'Speith',
      age: 27,
      nationality: 'USA',
      fedexPoints: -230,
      fedexRank: 4,
      careerEarnings: 134123,
      id: 234
    }]
  }

    var golferList = TestUtils.renderIntoDocument(<GolferList {...state}/>);
    var golferComponents = TestUtils.scryRenderedComponentsWithType(golferList, GolferProfile);

    expect(golferComponents.length).toBe(state.players.length);

  });

}); // desribe GolferList
