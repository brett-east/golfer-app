import React from 'react';

import GolferSearch from 'GolferSearch';
import GolferList from 'GolferList';
import {filterGolfers} from 'GolferAPI';

class GolferApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
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
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(searchText) {
    this.setState({
      searchText
    });
  }

  render() {
    var {players, searchText} = this.state;
    var filteredGolfers = filterGolfers(players, searchText);
    return (
  		<div>
        <div className="row">
          <div className="column small-centered small-12 medium-8 large-8">
            <div className="container">
              <h1 className="page-heading">Golfer Profile App</h1>
              <GolferSearch onSearch={this.handleSearch}/>
              <GolferList players={filteredGolfers}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GolferApp;
