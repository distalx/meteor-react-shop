import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import CartItem from './CartItem';

class CartItemList extends Component {
  constructor(props) {
    super(props);
  }

  renderCartItems() {
    return this.props.cartItems.map((cartItem) => {
      return(
        <div key={cartItem.productId}>
          <CartItem cartItem={cartItem} />
          <hr />
        </div>
      );
    });
  }

  render() {
    return(
      <div className="panel-body">
        {this.renderCartItems()}
      </div>
    );
  }
}

CartItemList.propTypes = {
	cartItems: PropTypes.array
};

export default CartItemList;
