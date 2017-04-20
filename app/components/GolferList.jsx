import React from 'react';

import GolferProfile from 'GolferProfile';

class GolferList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var {players} = this.props;
    var renderProfiles = () => {
      return players.map((player) => {
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

export default GolferList;
