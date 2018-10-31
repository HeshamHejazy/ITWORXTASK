import React, { Component } from 'react';
import './App.css';
import IconBar from './components/IconBar';
import Carousal from './components/Carousal';
import SearchBox from './components/SearchBox';
import SelfServices from './components/SelfServices';
import Circular from './components/Circular';
import Announcement from './components/Announcement';
import MarketplaceCarousal from './components/MarketplaceCarousal';
import UpComingEvents from './components/UpComingEvents';
import Survey from './components/Survey';
import Gallery from './components/Gallery';
import HelpDesk from './components/HelpDesk';

const announcements = [
  {
    "key": "0",
    "text": "Condelecences Ahmed Elgaber's cousin passed away",
    "time": "34 MINUTES AGO"
  },
  {
    "key": "1",
    "text": "New offer for our employees this summer",
    "time": "2 DAYS AGO"
  },
  {
    "key": "2",
    "text": "Condelecences Ahmed Elgaber's cousin passed away",
    "time": "34 MINUTES AGO"
  },
  {
    "key": "3",
    "text": "New offer for our employees this summer",
    "time": "2 DAYS AGO"
  }
];

const events = [
  {
    "key": "0",
    "text": "Lorem ipsum dolor sit amet, maecenas semper viverra rhoncus elit urna.",
    "time": "34 MINUTES AGO"
  },
  {
    "key": "1",
    "text": "Lorem ipsum dolor sit amet, maecenas semper viverra rhoncus elit urna.",
    "time": "2 DAYS AGO"
  },
  {
    "key": "2",
    "text": "Lorem ipsum dolor sit amet, maecenas semper viverra rhoncus elit urna.",
    "time": "34 MINUTES AGO"
  }
];




class App extends Component {
  render() {
    return (
      <main>
        <IconBar/>
        <div className="container">
        	<div className="flex-container">
        		<div className="greyBox carousalContainer">
        			<Carousal/>
        		</div>
            <div className="searchBox greyBox">
              <SearchBox/>
            </div>
            <div className="selfServiceBox silverBox">
              <SelfServices/>
            </div>
            <div className="circularsBox greyBox">
              <Circular/>
            </div>
            <div className="announcementBox whiteBox">
              <Announcement announcements={announcements}/>
            </div>
            <div className="marketplaceBox whiteBox">
              <MarketplaceCarousal/>
            </div>
            <div className="upcomeingBox whiteBox">
              <UpComingEvents events={events}/>
            </div>
            <div className="surveyBox redBox">
              <Survey/>
            </div>
            <div className="galleryBox greyBox">
              <Gallery/>
            </div>
            <div className="helpdeskBox redBox">
              <HelpDesk/>
            </div>
        	</div>
        </div>
      </main>
    );
  }
}

export default App;
