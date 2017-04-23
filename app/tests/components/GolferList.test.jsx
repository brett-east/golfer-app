import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import {configure} from 'configureStore';
import ConnectedGolferList, {GolferList} from 'GolferList';
import ConnectedGolferProfile, {GolferProfile} from 'GolferProfile';

describe('GolferList', () => {
  it('should exist', () => {
    expect(GolferList).toExist();
  });

  it('should render one GolferProfile for each player', () => {
    var players = [{
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
    }];

    var store = configure({players});
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedGolferList/>
      </Provider>
    )

    var golferList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedGolferList)[0];
    var golferComponents = TestUtils.scryRenderedComponentsWithType(golferList, ConnectedGolferProfile);

    expect(golferComponents.length).toBe(players.length);

  });

}); // desribe GolferList
