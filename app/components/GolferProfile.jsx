import React from 'react';

class GolferProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var {first_name, last_name, rank, birthday, country, college, turned_pro} = this.props;
    return (
    	<section className="golfer-profile row">
        <div className="small-12 columns">
          <h1>{`${first_name} ${last_name}`}</h1>
        </div>
        <div className="small-6 columns">
          <p><strong>Birth date:</strong> {birthday}</p>
          <p><strong>Rank:</strong>  {rank}</p>
          <p><strong>College:</strong>  {college}</p>
        </div>
        <div className="small-6 columns">
          <p><strong>Nationality:</strong>  {country}</p>
          <p><strong>Turned Pro:</strong>  {turned_pro}</p>
        </div>
      </section>
    );
  }
}

export default GolferProfile;
