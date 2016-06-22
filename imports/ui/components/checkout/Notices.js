import React, { Component } from 'react'

class Notices extends Component {
  constructor(props){
    super(props)
  }

  showNameAndEmailNotice() {
    return <li>Your name and email</li>
  }

  showAddressNotice() {
    return <li>Your shipping address</li>
  }

  showTermsNotice() {
    return <li>agreement to our <a href="#">Terms and Conditions</a></li>
  }

  render() {
    return(
      <div className="col-md-8">
        <div className="alert alert-info">
          All we need is
          { this.props.showNameAndEmailNotice ? this.showNameAndEmailNotice() : '' }
          { this.props.showAddressNotice ? this.showAddressNotice() : '' }
          { this.props.showTermsNotice ? this.showTermsNotice() : '' }
        </div>
        <div className="alert alert-success">
          <h5> <i className="glyphicon glyphicon-thumbs-up"></i> Good to go!</h5>
        </div>
      </div>
    )
  }
}

export default Notices
