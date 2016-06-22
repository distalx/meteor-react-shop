import React, { Component } from 'react'

class PayButton extends Component {
  constructor (props){
    super(props)
  }

  renderPayButton () {
    if (this.props.pay) {
      return <a href="#" className="btn btn-info" >Pay Now</a>
    } else {
      return <a href="#" className="btn btn-default" disabled="disabled">Pay Now</a>
    }
  }

  render () {
    return (
      <span>
        {this.renderPayButton()}
      </span>
    )
  }
}

PayButton.propTypes = {
  pay: React.PropTypes.bool
}

export default PayButton
