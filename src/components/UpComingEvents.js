import React, { Component } from 'react';

class UpComingEvents extends Component {
	render() {
    return ( 
      <div>
        <h1><span className="glyphicon glyphicon-calendar redColor"></span>UPCOMING EVENTS</h1>
        {this.props.events.map((event) => (
          <div key={event.key.toString()} className="upcomeingItem">
            <p>{event.text}</p>
            <p className="timeTxt">{event.time}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default UpComingEvents;
