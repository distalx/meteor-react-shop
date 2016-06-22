import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import { Carts } from '../../api/carts/carts'
import CheckoutDetail from '../components/checkout/CheckoutDetail'
import NameAndEmail from '../components/checkout/NameAndEmail'
import ShippingAddress from '../components/checkout/ShippingAddress'
import PaymentMethod from '../components/checkout/PaymentMethod'
import Notices from '../components/checkout/Notices'
import PayButton from '../components/checkout/PayButton'
import Redirect from '../components/shared/Redirect'

class CheckoutContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      hideNameAndEmailNotice: false,
      hideAddressNotice: false,
      hideTermsNotice: false,
      canPay: false
    }
  }

  changeNameAndEmailNoticeState(name, email) {
    // setState() does not immediately mutate this.state but creates a pending state transition.
    // If you want a function to be executed after the state change occurs, pass it in as a callback.
    if (name && email) {
      this.setState({ hideNameAndEmailNotice: true }, () => this.changeCanPayState() )
    } else {
      this.setState({ hideNameAndEmailNotice: false }, () => this.changeCanPayState() )
    }
  }

  changeAddressNoticeState(address, address2, city, state, zip) {
    // setState() does not immediately mutate this.state but creates a pending state transition.
    // If you want a function to be executed after the state change occurs, pass it in as a callback.
    if (address && address2 && city && state && zip) {
      this.setState({ hideAddressNotice: true }, () => this.changeCanPayState() )
    } else {
      this.setState({ hideAddressNotice: false }, () => this.changeCanPayState() )
    }
  }

  changeTermsNoticeState() {
    // setState() does not immediately mutate this.state but creates a pending state transition.
    // If you want a function to be executed after the state change occurs, pass it in as a callback.
    this.setState({ hideTermsNotice: !this.state.hideTermsNotice }, () => this.changeCanPayState() )
  }

  changeCanPayState() {
    state = this.state

    if (state.hideNameAndEmailNotice && state.hideAddressNotice && state.hideTermsNotice) {
      this.setState({ canPay: true })
    } else {
      this.setState({ canPay: false })
    }
  }

  render () {
    if(!this.props.cart) { return <Redirect /> }

    return (
      <div className="container" id="checkout-panel">
        <ol className="breadcrumb">
          <li><a href="/">Home</a></li>
          <li><a href="/cartitems">Shopping Cart</a></li>
          <li className="active">Checkout</li>
        </ol>
        <div className="col-md-12">
          <div className="col-md-8">
            <NameAndEmail changeNameAndEmailNoticeState={this.changeNameAndEmailNoticeState.bind(this)}/>
            <hr/>
            <ShippingAddress changeAddressNoticeState={this.changeAddressNoticeState.bind(this)}/>
            <hr/>
            <PaymentMethod />
            <hr/>
            <div className="row">
              <div className="col-md-12">
                <h3>Terms and Conditions</h3>
                <div className="checkbox">
                  <label>
                  <input type="checkbox" onClick={this.changeTermsNoticeState.bind(this)} />
                  I agree to <a href="#">Terms and Conditions</a>
                  </label>
                </div>
                <div className="row">
                  <div className="col-md-2">
                    <PayButton canPay={this.state.canPay} />
                  </div>
                    <Notices
                      hideNameAndEmailNotice={this.state.hideNameAndEmailNotice}
                      hideAddressNotice={this.state.hideAddressNotice}
                      hideTermsNotice={this.state.hideTermsNotice}
                      canPay={this.state.canPay}
                    />
                </div>
              </div>
            </div>
          </div>
          <CheckoutDetail cartItems={this.props.cart.cartItems} />
        </div>
      </div>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('cart', Meteor.userId())

  return { cart: Carts.findOne({userId: Meteor.userId()})}
}, CheckoutContainer)
