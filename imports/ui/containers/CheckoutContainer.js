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
      showNameAndEmailNotice: true,
      showAddressNotice: true,
      showTermsNotice: true,
      canPay: false
    }
  }

  changeNameAndEmailNoticeState(name, email) {
    if (name && email) {
      this.setState({ showNameAndEmailNotice: false })
    } else {
      this.setState({ showNameAndEmailNotice: true })
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
            <ShippingAddress />
            <hr/>
            <PaymentMethod />
            <hr/>
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
                    <PayButton pay={this.state.pay} />
                  </div>
                    <Notices
                      showNameAndEmailNotice={this.state.showNameAndEmailNotice}
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
