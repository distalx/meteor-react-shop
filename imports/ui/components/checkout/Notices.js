import React, { Component } from 'react'

class Notices extends Component {
  constructor(props){
    super(props)
  }

  renderNameAndEmailNotice() {
    return <li>Your name and email</li>
  }

  renderAddressNotice() {
    return <li>Your shipping address</li>
  }

  renderTermsNotice() {
    return <li>agreement to our <a href="#">Terms and Conditions</a></li>
  }

  renderNotice() {
    if (this.props.canPay) {
      return (
        <div className="alert alert-success">
          <h5> <i className="glyphicon glyphicon-thumbs-up"></i> Good to go!</h5>
        </div>
      )
    }

    return (
      <div className="alert alert-info">
        All we need is
        { this.props.hideNameAndEmailNotice ? '' : this.renderNameAndEmailNotice() }
        { this.props.hideAddressNotice ? '' : this.renderAddressNotice() }
        { this.props.hideTermsNotice ? '' : this.renderTermsNotice() }
      </div>
    )
  }

  render() {
    return(
      <div className="col-md-8">
        {this.renderNotice()}
      </div>
    )
  }
}

export default Notices
