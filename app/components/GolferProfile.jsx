import React from 'react';

class GolferProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var {name, age, nationality, fedexPoints, fedexRank, careerEarnings} = this.props;
    return (
    	<div className="golfer-profile row">
        <div className="small-12 columns">
          <p><strong>{name}</strong></p>
        </div>
        <div className="small-6 columns">
          <p>Age: {age}</p>
          <p>FedEx Points: {fedexPoints}</p>
          <p>Career Earnings: ${careerEarnings}</p>
        </div>
        <div className="small-6 columns">
          <p>Nationality: {nationality}</p>
          <p>FedEx Rank: {fedexRank}</p>
        </div>
      </div>
    );
  }
}

export default GolferProfile;
