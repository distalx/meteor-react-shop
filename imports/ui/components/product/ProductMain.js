import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createContainer } from 'meteor/react-meteor-data'
import { Bert } from 'meteor/themeteorchef:bert'

import { Products } from '../../../api/products/products'
import { Carts } from '../../../api/carts/carts'

class ProductMain extends Component {
  constructor(props) {
    super(props)

    this.state = {
      quantity: 1
    }
  }

  addToCart() {
    const quantity = ReactDOM.findDOMNode(this.refs.quantityInput).value.trim()

    Meteor.call('addToCart', this.props.product)
    Meteor.call('changeQuantity', this.props.product._id, quantity)

    Bert.alert( 'Product Added!', 'success', 'growl-bottom-right' )
  }

  changeQuantity() {
    quantityInput = ReactDOM.findDOMNode(this.refs.quantityInput)
    const quantity = quantityInput.value.trim()
    this.setState({quantity})
  }

  render() {
    if (!this.props.product) { return <div>Loading...</div>; }

    // inline css
    const name = {
      display: 'flex',
      justifyContent: 'space-around',
      borderBottom: '1px solid #eee',
      marginTop: '10px',
      marginBottom: '30px'
    }

    const image = {
      display: 'flex',
      justifyContent: 'space-around'
    }

    const price = {
      display: 'flex',
      justifyContent: 'space-around',
      fontSize: '24px',
      marginTop: '10px'
    }

    const quantity = {
      marginTop: '10px',
      fontSize: '18px'
    }

    const purchase = {
      height: '50px',
      padding: '5px 0',
      background: '#39383E'
    }

    const purchaseBtn = {
      width: '200px',
      height: '38px',
      background: '#7cd9cf',
      fontWeight: 'bold',
      fontSize: '18px',
    }
    // inline css

    return (
      <div>

        <div style={name}>
          <h3>{this.props.product.name}</h3>
        </div>

        <div style={image}>
          <img src={this.props.product.image} />
        </div>

        <div style={price}>
          $ {this.props.product.price}
        </div>

        <div style={quantity} className="col-md-12 text-center">
          <span style={{marginRight: '5px'}}>Quantity</span>
          <input style={{width: '50px'}} type="number" value={this.state.quantity} ref="quantityInput" onChange={this.changeQuantity.bind(this)} />
        </div>

        <div style={purchase} className="navbar-fixed-bottom col-md-12 text-center">
          <input style={purchaseBtn} type="submit" value="Add To Cart" className="btn" onClick={this.addToCart.bind(this)} />
        </div>

      </div>
    )
  }
}

export default createContainer((props) => {
  Meteor.subscribe('products')
  // rember to subscribe cart from server
  // otherwise frontend will occur error cause it can't find any cart
  Meteor.subscribe('cart', Meteor.userId())

  const { productId } = props.params

  return { product: Products.findOne(productId) }
}, ProductMain)
