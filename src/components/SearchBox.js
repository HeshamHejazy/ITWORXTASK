import React, { Component } from 'react';

class SearchBox extends Component {
	render() {
    return (
      	<form>
            <button type="submit">FIND PEOPLE</button>
            <div className="inputContainder clear">
              <input type="text" placeholder="Enter name" name="search"/> <span className="glyphicon glyphicon-search redColor"></span>
            </div>
        </form>
    )
  }
}

export default SearchBox;
