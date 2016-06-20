import React, { Component } from 'react'

class PaymentMethod extends Component {
  render() {
    return(
      <div>
        <div className="radio" style={{marginTop: '24px'}}>
          <label>
          <input type="radio" defaultChecked name="processor" value="stripe" />
            <img src="/images/strip.jpg" alt=""/>
          </label>
        </div>
      </div>
    )
  }
}

export default PaymentMethod
