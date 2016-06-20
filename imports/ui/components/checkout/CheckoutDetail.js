import React, { Component } from 'react'

class CheckoutDetail extends Component {
  constructor(props) {
    super(props)
  }

  calculateAmount() {
    return _.reduce(this.props.cartItems, (sum, cartItem) => {
      return sum + ( cartItem.price * cartItem.quantity )
    }, 0); // default sum == 0
  }

  renderCartItems() {
    return this.props.cartItems.map((cartItem) => {
      return(
        <tr key={cartItem.productId}>
          <td>{cartItem.name}</td>
          <td>{cartItem.quantity}</td>
          <td style={{textAlign: 'right'}}>$ {cartItem.price}</td>
        </tr>
      )
    })
  }

  render() {
    return(
      <div className="col-md-4" style={{marginTop: '24px'}}>
        <div className="panel panel-info">
          <div className="panel-heading">
            <div className="panel-title">
              <div className="row">
                <div className="col-xs-12">
                  <h5><span className="glyphicon glyphicon-shopping-cart"></span> Your Purchase</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="panel-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th className="text-right">Price</th>
                </tr>
              </thead>
              <tbody>
                {this.renderCartItems()}
              </tbody>
            </table>
          </div>
          <div className="panel-footer">
            <div className="row text-center">
              <div className="col-xs-9">
                <h4 className="text-right">Total <strong>$ {this.calculateAmount()}</strong></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CheckoutDetail
