import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import _ from 'underscore';

import '../sharedMethods';

import { Carts } from '../carts/carts';

Meteor.methods({
  'addToCart'(product) {
      const cart = Meteor.call('getCart');

      // find whether product has been added to cart
      // Weird if I use
      // let cartItem = Meteor.call('findCartItem', cart.cartItems, productId)
      // it cannot update correctly
      let cartItem = _.find(cart.cartItems, (cartItem) => {
        return cartItem.productId == product._id;
      });

      if (cartItem) {
        cartItem.quantity++;
      } else {
        let cartItem = {
          productId: product._id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1
        };
        cart.cartItems.push(cartItem);
      }

      Carts.update(cart._id, cart);
    },

  'removeFromCart'(productId) {
    const cart = Meteor.call('getCart');
    let cartItem = Meteor.call('findCartItem', cart.cartItems, productId);

    if(cartItem) {
      const index = cart.cartItems.indexOf(cartItem);
      // remove from cartItem from cart
      cart.cartItems.splice(index, 1);
      Carts.update(cart._id, cart);
    }
  }
});
