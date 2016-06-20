import { Carts } from './carts'

import '../sharedMethods'

// meteor methods will be used by both client and server side
// we have to subscribe Cart from server
// otherwise it will be correct in server but error in client side
Meteor.methods({
  'getCart'() {
    // findOne return obj
    let cart = Carts.findOne({userId: Meteor.userId()})

    // if user doesn't have a cart, creat one for the user
    if (!cart) {
      // insert return _id
      cartId = Carts.insert({
        userId: Meteor.userId(),
        cartItems: [],
        createdAt: new Date()
      })

      cart = Carts.findOne(cartId)
    }

    return cart
  },

  'findCartItem'(cartItems, productId) {
    return _.find(cartItems, (cartItem) => {
      return cartItem.productId == productId
    })
  },

  'changeQuantity'(productId, quantity) {
    const cart = Meteor.call('getCart')
    let cartItem = _.find(cart.cartItems, (cartItem) => {
      return cartItem.productId == productId
    })

    cartItem.quantity = quantity

    Carts.update(cart._id, cart)
  }
})
