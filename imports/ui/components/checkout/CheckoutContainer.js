import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import { Carts } from '../../../api/carts/carts'
import CheckoutDetail from './CheckoutDetail'
import NameAndEmail from './NameAndEmail'
import ShippingAddress from './ShippingAddress'
import PaymentMethod from './PaymentMethod'
import TermsAndConditions from './TermsAndConditions'
import Redirect from '../shared/Redirect'

class CheckoutContainer extends Component {

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
            <NameAndEmail />
            <hr/>
            <ShippingAddress />
            <hr/>
            <PaymentMethod />
            <hr/>
            <TermsAndConditions />
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
