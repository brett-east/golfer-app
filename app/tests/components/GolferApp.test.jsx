import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import expect from 'expect';
//import $ = require('jQuery');
import TestUtils from 'react-addons-test-utils';

var configureStore = require('configureStore');
import GolferList from 'GolferList';
import GolferApp from 'GolferApp';

describe('GolferApp', () => {
  it('should exist', () => {
    expect(GolferApp).toExist();
  });

  it('should render GolferList', () => {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <GolferApp/>
      </Provider>
    );

    var golferApp = TestUtils.scryRenderedComponentsWithType(provider, GolferApp)[0];
    var golferList = TestUtils.scryRenderedComponentsWithType(golferApp, GolferList);

    expect(golferList.length).toEqual(1);
  });
})
