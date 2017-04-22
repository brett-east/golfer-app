import React from 'react';
import {connect} from 'react-redux';

import {setSearchText} from 'actions';

export class GolferSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var {dispatch, searchText} = this.props;
    return (
    	<div>
        <form>
          <input type="search" ref="searchText" placeholder="Filter by player name" value={searchText} onChange={()=>{
            var searchText = this.refs.searchText.value;
            dispatch(setSearchText(searchText));
          }}/>
        </form>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    searchText: state.searchText
  };
})(GolferSearch);
