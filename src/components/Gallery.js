import React, { Component } from 'react';
import GalleryImg from '../images/img1.jpg';

class Gallery extends Component {
	render() {
    return ( 
      <div>
      	<div id="galleryBoxCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="item active">
              <div style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.4)) ,url("+GalleryImg+")"}}>
              </div>
            </div>
            <div className="item">
              <div style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.4)) ,url("+GalleryImg+")"}}>
              </div>
            </div>
            <div className="item">
              <div style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.4)) ,url("+GalleryImg+")"}}>
              </div>
            </div>
          </div>
          <a className="left carousel-control" href="#galleryBoxCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#galleryBoxCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <span className="redTag">GALLERY</span>
      </div>
    )
  }
}

export default Gallery;
