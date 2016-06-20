import React, { Component } from 'react'

class PaymentMethod extends Component {
  render() {
    return(
      <div>
        <div className="radio">
          <label>
          <input type="radio" name="processor" value="paypal" />
          <img src="/images/paypal.png" alt=""/>
          </label>
        </div>
        <div className="radio" style={{marginTop: '24px'}}>
          <label>
          <input type="radio" name="processor" value="stripe" />
          <img src="/images/cc_payment.jpg" alt=""/>
          </label>
        </div>
      </div>
    )
  }
}

export default PaymentMethod
