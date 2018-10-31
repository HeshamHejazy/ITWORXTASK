import React, { Component } from 'react';

class Survey extends Component {
	render() {
    return ( 
      <div>
      	<ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item active">
            <a className="nav-link" id="polls-tab" data-toggle="tab" href="#polls" role="tab" aria-controls="polls" aria-selected="true">POLLS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="survey-tab" data-toggle="tab" href="#survey" role="tab" aria-controls="survey" aria-selected="false">SURVEY</a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active in" id="polls" role="tabpanel" aria-labelledby="polls-tab">
            <form>
              <div className="form-group">
                <label>How do you like the new internet portal</label>
                <div className="custom-control custom-radio">
                  <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"/>
                  <label className="custom-control-label" htmlFor="customRadio1">I like it</label>
                </div>
                <div className="custom-control custom-radio">
                  <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
                  <label className="custom-control-label" htmlFor="customRadio2">I dont't like it</label>
                </div>
              </div>
              <button className="submitBtn" type="submit" >SUBMIT</button>
              <button className="resultBtn" type="submit" >VIEW RESULTS</button>
            </form>
          </div>
          <div className="tab-pane fade" id="survey" role="tabpanel" aria-labelledby="survey-tab">
            <form>
              <div className="form-group">
                <label>Choose your favorite sports</label>
                <div className="custom-control">
                  <input type="checkbox" className="form-check-input" id="Check1"/>
                  <label className="form-check-label" htmlFor="Check1">Swimming</label>
                </div>
                <div className="custom-control">
                  <input type="checkbox" className="form-check-input" id="Check2"/>
                  <label className="form-check-label" htmlFor="Check2">Running</label>
                </div>
                <div className="custom-control">
                  <input type="checkbox" className="form-check-input" id="Check3"/>
                  <label className="form-check-label" htmlFor="Check3">Soccer</label>
                </div>
                <div className="custom-control">
                  <input type="checkbox" className="form-check-input" id="Check4"/>
                  <label className="form-check-label" htmlFor="Check4">Basketball</label>
                </div>
              </div>
              <button className="submitBtn" type="submit" >SUBMIT</button>
              <button className="resultBtn" type="submit" >VIEW RESULTS</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Survey;
