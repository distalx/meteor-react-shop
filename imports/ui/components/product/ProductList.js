import React, { Component } from 'react'
import { Link } from 'react-router'
import { Bert } from 'meteor/themeteorchef:bert'

class ProductList extends Component {
  constructor(props) {
    super(props)
  }

  addToCart() {
    // this == product
    Meteor.call('addToCart', this)

    Bert.alert( 'Product Added!', 'success', 'growl-bottom-right' )
  }

  renderProducts() {
    return this.props.products.map((product) => {
      const url = `/products/${product._id}`

      return (
        <div key={product._id} className="thumb">
          <div className="panel panel-default">

            <div className="text-center">
              <h3>{product.name}</h3>
            </div>

            <div className="panel-body">
              <Link to={url}>
                <img src={product.image} className="thumbnail"/>
              </Link>
            </div>

            <div className="panel-footer text-center">
              $ {product.price}
              <a
                className="btn btn-primary"
                style={{marginLeft: '10px'}}
                onClick={this.addToCart.bind(product)}
              >
                Add to cart
              </a>
            </div>

          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="product-list">
        {this.renderProducts()}
      </div>
    )
  }
}

ProductList.propTypes = {
  products: React.PropTypes.array.isRequired
}

export default ProductList
