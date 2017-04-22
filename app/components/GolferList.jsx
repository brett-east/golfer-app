import React from 'react';
import {connect} from 'react-redux';

import GolferProfile from 'GolferProfile';
import {filterGolfers} from 'GolferAPI';

export class GolferList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var {players, searchText} = this.props;
    var renderProfiles = () => {
      var filteredPlayers = filterGolfers(players, searchText);
      return filteredPlayers.map((player) => {
        return <GolferProfile key={player.id} {...player}/>
      });
    }
    return (
    	<div>
        {renderProfiles()}
      </div>
    );
  }
}

export default connect((state) => {
  return {
    players: state.players,
    searchText: state.searchText
  };
})(GolferList);
