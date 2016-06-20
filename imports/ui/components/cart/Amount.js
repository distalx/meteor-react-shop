import React, { Component } from 'react'
import { Link } from 'react-router'

class Amount extends Component {
  constructor(props) {
    super(props)
  }

  calculateAmount() {
    return _.reduce(this.props.cartItems, (sum, cartItem) => {
      return sum + ( cartItem.price * cartItem.quantity )
    }, 0); // default sum == 0
  }

  render() {
    return(
      <div className="panel-footer">
        <div className="row text-center">
          <div className="col-xs-9">
            <h4 className="text-right">Total <strong>${this.calculateAmount()}</strong></h4>
          </div>
          <div className="col-xs-3">
            <Link to={'/checkout'} className="btn btn-success btn-block">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Amount
