import React, { Component } from 'react';

class Announcement extends Component {
	render() {
    return ( 
      <div>
        <h1><span className="glyphicon glyphicon-bullhorn redColor"></span>ANNOUNCEMENTS <span className="rightArrow glyphicon glyphicon-triangle-top"></span></h1>
        {this.props.announcements.map((announcement) => (
          <div key={announcement.key.toString()} className="announcementItem">
            <p>{announcement.text}</p>
            <p className="timeTxt">{announcement.time}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default Announcement;
