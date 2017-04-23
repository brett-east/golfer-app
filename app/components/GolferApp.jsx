import React from 'react';

import GolferSearch from 'GolferSearch';
import GolferList from 'GolferList';
import {filterGolfers} from 'GolferAPI';

class GolferApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
  		<div>
        <div className="row">
          <div className="column small-centered small-12 medium-8 large-8">
            <div className="container">
              <h1 className="page-heading">Golfer Profile App</h1>
              <GolferSearch/>
              <GolferList/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GolferApp;
