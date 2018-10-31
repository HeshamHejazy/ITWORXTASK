import React, { Component } from 'react';
import sampleImg from '../images/sample.jpg';

class Carousal extends Component {
	render() {
    return (
		<div id="myCarousel" className="carousel slide" data-ride="carousel">
			<ol className="carousel-indicators sideAlign">
				<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
				<li data-target="#myCarousel" data-slide-to="1"></li>
				<li data-target="#myCarousel" data-slide-to="2"></li>
				<li data-target="#myCarousel" data-slide-to="3"></li>
				<li data-target="#myCarousel" data-slide-to="4"></li>
			</ol>
			<div className="carousel-inner">
				<div className="item active">
					<div className="col-md-5 col-xs-12">
						<img className="img-responsive" src={sampleImg} alt="First Slide"/>
					</div>
					<div className="sliderTxt col-md-7 col-xs-12">
						<h1 className="sliderTitle"><span className="glyphicon glyphicon-globe"></span>NEWS</h1>
						<p><strong>Lorem ipsum dolor sit amet, maecenas semper viverra rhoncus elit urna, nec lobortis eu pellentesque</strong></p>
						<p>Lorem ipsum dolor sit amet, maecenas semper viverra rhoncus elit urna, nec lobortis eu pellentesque, felis purus placerat cursus eu ut, suscipit aenean arcu pellentesque rutrum. Lectus adipiscing purus sed neque duis.</p>
						<button className="button">Read more</button>
					</div>
				</div>
				<div className="item">
					<div className="col-md-5 col-xs-12">
						<img className="img-responsive" src={sampleImg} alt="Second Slide"/>
					</div>
					<div className="sliderTxt col-md-7 col-xs-12">
						<h1 className="sliderTitle"><span className="glyphicon glyphicon-globe"></span>NEWS</h1>
						<p><strong>Lorem ipsum dolor sit amet, maecenas semper viverra rhoncus elit urna, nec lobortis eu pellentesque</strong></p>
						<p>Lorem ipsum dolor sit amet, maecenas semper viverra rhoncus elit urna, nec lobortis eu pellentesque, felis purus placerat cursus eu ut, suscipit aenean arcu pellentesque rutrum. Lectus adipiscing purus sed neque duis.</p>
						<button className="button">Read more</button>
					</div>
				</div>
				<div className="item">
					<div className="col-md-5 col-xs-12">
						<img className="img-responsive" src={sampleImg} alt="Third Slide"/>
					</div>
					<div className="sliderTxt col-md-7 col-xs-12">
						<h1 className="sliderTitle"><span className="glyphicon glyphicon-globe"></span>NEWS</h1>
						<p><strong>Lorem ipsum dolor sit amet, maecenas semper viverra rhoncus elit urna, nec lobortis eu pellentesque</strong></p>
						<p>Lorem ipsum dolor sit amet, maecenas semper viverra rhoncus elit urna, nec lobortis eu pellentesque, felis purus placerat cursus eu ut, suscipit aenean arcu pellentesque rutrum. Lectus adipiscing purus sed neque duis.</p>
						<button className="button">Read more</button>
					</div>
				</div>
				<div className="item">
					<div className="col-md-5 col-xs-12">
						<img className="img-responsive" src={sampleImg} alt="Fourth Slide"/>
					</div>
					<div className="sliderTxt col-md-7 col-xs-12">
						<h1 className="sliderTitle"><span className="glyphicon glyphicon-globe"></span>NEWS</h1>
						<p><strong>Lorem ipsum dolor sit amet, maecenas semper viverra rhoncus elit urna, nec lobortis eu pellentesque</strong></p>
						<p>Lorem ipsum dolor sit amet, maecenas semper viverra rhoncus elit urna, nec lobortis eu pellentesque, felis purus placerat cursus eu ut, suscipit aenean arcu pellentesque rutrum. Lectus adipiscing purus sed neque duis.</p>
						<button className="button">Read more</button>
					</div>
				</div>
				<div className="item">
					<div className="col-md-5 col-xs-12">
						<img className="img-responsive" src={sampleImg} alt="Fifth Slide"/>
					</div>
					<div className="sliderTxt col-md-7 col-xs-12">
						<h1 className="sliderTitle"><span className="glyphicon glyphicon-globe"></span>NEWS</h1>
						<p><strong>Lorem ipsum dolor sit amet, maecenas semper viverra rhoncus elit urna, nec lobortis eu pellentesque</strong></p>
						<p>Lorem ipsum dolor sit amet, maecenas semper viverra rhoncus elit urna, nec lobortis eu pellentesque, felis purus placerat cursus eu ut, suscipit aenean arcu pellentesque rutrum. Lectus adipiscing purus sed neque duis.</p>
						<button className="button">Read more</button>
					</div>
				</div>
			</div>
		</div>
		)
  }
}

export default Carousal;
