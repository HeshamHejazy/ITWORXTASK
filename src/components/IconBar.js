import React, { Component } from 'react';

class IconBar extends Component {
	render() {
    return (
      	<div className="icon-bar">
	      <a href="#"> <i className="fa fa-lightbulb"></i></a>
	      <a href="#"> <i className="fa fa-image"></i></a>
	      <a href="#"> <i className="fa fa-file-alt"></i></a>
	      <a href="#"> <i className="fa fa-shopping-bag"></i></a>
	    </div>
    )
  }
}

export default IconBar;
