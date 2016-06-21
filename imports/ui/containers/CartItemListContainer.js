import React, { Component } from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import CartItemList from '../components/cart/CartItemList'
import Amount from '../components/cart/Amount'
import { Carts } from '../../api/carts/carts'
import Redirect from '../components/shared/Redirect'


class CartItemListContainer extends Component {
  render() {
    if(!this.props.cart) { return <Redirect /> }

    return (
      <div className="container">
      <ol className="breadcrumb">
        <li><a href="/">Home</a></li>
        <li>Shopping Cart</li>
        <li><a href="/checkout">Checkout</a></li>
      </ol>
        <div className="row">
          <div className="col-xs-12">
            <div className="panel panel-info">
              <div className="panel-heading">
                <div className="panel-title">
                  <div className="row">
                    <div className="col-xs-6">
                      <h5><span className="glyphicon glyphicon-shopping-cart"></span> Shopping Cart</h5>
                    </div>
                  </div>
                </div>
              </div>

              <CartItemList cartItems={this.props.cart.cartItems} />

              <Amount cartItems={this.props.cart.cartItems} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('cart', Meteor.userId())

  return { cart: Carts.findOne({userId: Meteor.userId()}) }
}, CartItemListContainer)
