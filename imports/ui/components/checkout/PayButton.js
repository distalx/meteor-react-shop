import React, { Component, PropTypes } from 'react';

class PayButton extends Component {
  constructor (props){
    super(props);
  }

  renderPayButton () {
    if (this.props.canPay) {
      return <a href="#" className="btn btn-info" >Pay Now</a>;
    } else {
      return <a href="#" className="btn btn-default" disabled="disabled">Pay Now</a>;
    }
  }

  render () {
    return (
      <span>
        {this.renderPayButton()}
      </span>
    );
  }
}

PayButton.propTypes = {
  canPay: PropTypes.bool
};

export default PayButton;
