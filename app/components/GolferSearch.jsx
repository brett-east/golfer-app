import React from 'react';

class GolferSearch extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    	<div>
        <form>
          <input type="text" />
          <button className="button">Search</button>
        </form>
      </div>
    );
  }
}

export default GolferSearch;
