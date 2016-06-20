import React, { Component } from 'react'

class TermsAndConditions extends Component {
  render() {
    return(
      <div className="row">
        <div className="col-md-12">
          <h3>Terms and Conditions</h3>
          <div className="checkbox">
            <label>
            <input type="checkbox" />
            I agree to <a href="#">Terms and Conditions</a>
            </label>
          </div>
          <div className="row">
            <div className="col-md-2">
              <span>
                {/*TODO Hide messages based on another components' state*/}
                <a href="#" className="btn btn-default" disabled="disabled">Pay Now</a>
              </span>
              <span>
                <a href="#" id="checkout" className="btn btn-info" >Pay Now</a>
              </span>
            </div>
            <div className="col-md-8">
              <div className="alert alert-info">
                {/*TODO Hide messages based on another components' state*/}
                All we need is
                <li>Your name and email</li>
                <li>Your shipping address</li>
                <li>agreement to our <a href="#">Terms and Conditions</a></li>
              </div>
              <div className="alert alert-success">
                <h5> <i className="glyphicon glyphicon-thumbs-up"></i> Good to go!</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TermsAndConditions
