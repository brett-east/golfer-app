import React from 'react';

class GolferSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch() {
    var searchText = this.refs.searchText.value;

    this.props.onSearch(searchText);
  }
  render() {
    return (
    	<div>
        <form>
          <input type="search" ref="searchText" placeholder="Filter by player name" onChange={this.handleSearch}/>
        </form>
      </div>
    );
  }
}

export default GolferSearch;
