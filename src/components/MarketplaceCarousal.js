import React, { Component } from 'react';

class MarketplaceCarousal extends Component {
	render() {
    return ( 
      <div>
      	<div id="marketplaceBoxCarousel" className="carousel slide">
            <div className="carousel-inner">
              <div className="item active">
                <div className="carImage">
                </div>
                <div className="carData">
                  <p><strong>Toyota FJ Crouser 2009</strong></p>
                  <p className="timeTxt">MOHAMED FADY</p>
                </div>
              </div>
              <div className="item">
                <div className="carImage">
                </div>
                <div className="carData">
                  <p><strong>Toyota FJ Crouser 2009</strong></p>
                  <p className="timeTxt">MOHAMED FADY</p>
                </div>
              </div>
              <div className="item">
                <div className="carImage">
                </div>
                <div className="carData">
                  <p><strong>Toyota FJ Crouser 2009</strong></p>
                  <p className="timeTxt">MOHAMED FADY</p>
                </div>
              </div>
            </div>
            <a className="left carousel-control" href="#marketplaceBoxCarousel" data-slide="prev">
              <span className="glyphicon glyphicon-menu-left"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#marketplaceBoxCarousel" data-slide="next">
              <span className="glyphicon glyphicon-menu-right"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

          <span className="redTag">OUR MARKET PLACE</span>
          <div className="redCircle"><i className="fas fa-car"></i></div>
          <button className="redButton">View all</button>
      </div>
    )
  }
}

export default MarketplaceCarousal;
