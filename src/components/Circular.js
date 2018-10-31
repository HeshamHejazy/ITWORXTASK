import React, { Component } from 'react';

class Circular extends Component {
	render() {
    return ( 
      <div>
      	<h2> Circulars <span className="redTag">NEW</span> </h2>
          <h2> <strong>National Holiday</strong></h2>
          <p>Some text discription goes here</p>
          <p><strong>22.3.2016</strong></p>
          <button className="redButton">View all</button>
      </div>
    )
  }
}

export default Circular;
