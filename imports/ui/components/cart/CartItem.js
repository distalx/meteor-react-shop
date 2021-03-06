import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Bert } from 'meteor/themeteorchef:bert';

class CartItem extends Component {
  constructor(props) {
    super(props);

    this.changeQuantity = this.changeQuantity.bind(this);
  }

  removeCartItem() {
    Meteor.call('removeFromCart', this.productId);

    Bert.alert( 'Product Removed.', 'info', 'growl-bottom-right' );
  }

  changeQuantity(event) {
    const quantity = event.target.value;
    Meteor.call('changeQuantity', this.props.cartItem.productId, quantity);
  }

  render() {
    const { cartItem } = this.props;

    return(
      <div className="row">
        <div className="col-xs-2">
          <img style={{width: '90px'}} src={cartItem.image} />
        </div>
        <div className="col-xs-4">
          <h4 className="product-name"><strong>{cartItem.name}</strong></h4>
          <h4><small>Product description</small></h4>
        </div>
        <div className="col-xs-6">
          <div className="col-xs-6 text-right">
            <h6><strong>{cartItem.price} <span className="text-muted">x</span></strong></h6>
          </div>
          <div className="col-xs-4">
            <input
              className="form-control input-sm"
              type="number"
              value={cartItem.quantity}
              onChange={this.changeQuantity}
            />
          </div>
          <div className="col-xs-2">
            <a role="button" onClick={this.removeCartItem.bind(cartItem)}>
              <i className="fa fa-trash"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

CartItem.propTypes = {
	cartItem: React.PropTypes.object.isRequired
};

export default CartItem;
