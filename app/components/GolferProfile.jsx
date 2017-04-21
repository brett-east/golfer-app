import React from 'react';

class GolferProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var {name, age, nationality, fedexPoints, fedexRank, careerEarnings} = this.props;
    return (
    	<section className="golfer-profile row">
        <div className="small-12 columns">
          <h1>{name}</h1>
        </div>
        <div className="small-6 columns">
          <p><strong>Age:</strong> {age}</p>
          <p><strong>FedEx Points:</strong>  {fedexPoints}</p>
          <p><strong>Career Earnings:</strong>  ${careerEarnings}</p>
        </div>
        <div className="small-6 columns">
          <p><strong>Nationality:</strong>  {nationality}</p>
          <p><strong>FedEx Rank:</strong>  {fedexRank}</p>
        </div>
      </section>
    );
  }
}

export default GolferProfile;
