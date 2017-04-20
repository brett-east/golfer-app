import React from 'react';

import GolferSearch from 'GolferSearch';
import GolferList from 'GolferList';

class GolferApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [{
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
      }]
    };
  }

  render() {
    return (
  		<div>
        <div className="row">
          <div className="column small-centered small-12 medium-8 large-8">
            <div className="container">
              <GolferSearch />
              <GolferList {...this.state}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GolferApp;
