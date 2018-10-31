import React, { Component } from 'react';

class SelfServices extends Component {
	render() {
    return ( 
      <div>
      	<h1><span className="glyphicon glyphicon-cog redColor"></span>SELF SERVICES</h1>
        <div className="shadedBox">
          <div className="serviceItem col-md-4 col-sm-5 col-xs-12">
            <span className="glyphicon glyphicon-user"></span>
            <p>CONTACTS</p>
          </div>
          <div className="serviceItem col-md-4 col-sm-5 col-xs-12">
            <span className="glyphicon glyphicon-file"></span>
            <p>HR FORM</p>
          </div>
          <div className="serviceItem col-md-4 col-sm-5 col-xs-12">
            <span className="glyphicon glyphicon-envelope"></span>
            <p>HR LETTER</p>
          </div>
          <div className="serviceItem col-md-4 col-sm-5 col-xs-12">
            <span className="glyphicon glyphicon-plane"></span>
            <p>LEAVE REQUEST</p>
          </div>
          <div className="serviceItem col-md-4 col-sm-5 col-xs-12">
            <span className="glyphicon glyphicon-stats"></span>
            <p>REPORTING</p>
          </div>
          <div className="serviceItem col-md-4 col-sm-5 col-xs-12">
            <span className="glyphicon glyphicon-calendar"></span>
            <p>MEETING ROOM</p>
          </div>
        </div>
        <button className="redButton">View all</button>
      </div>
    )
  }
}

export default SelfServices;
