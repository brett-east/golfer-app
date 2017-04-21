import React from 'react';

import GolferSearch from 'GolferSearch';
import GolferList from 'GolferList';

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

  filterGolfers(players, searchText) {
    var filteredGolfers = players;
    filteredGolfers = filteredGolfers.filter((player) => {
      if (searchText.length < 1) {
        return true;
      }
      return player.name.toLowerCase().indexOf(searchText) >= 0;
    });
    return filteredGolfers;
  }

  handleSearch(searchText) {
    this.setState({
      searchText: searchText.toLowerCase()
    });
  }

  render() {
    var {players, searchText} = this.state;
    var filteredGolfers = this.filterGolfers(players, searchText);
    return (
  		<div>
        <div className="row">
          <div className="column small-centered small-12 medium-8 large-8">
            <div className="container">
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
