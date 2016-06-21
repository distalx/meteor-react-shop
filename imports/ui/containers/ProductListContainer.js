import React, { Component } from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import { Products } from '../../../imports/api/products/products';
import ProductList from '../components/product/ProductList'

class ProductListContainer extends Component {
  render() {
    if (!this.props.products) { return <div>Loading...</div> }

    return(
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="jumbotron">
                <h1>Welcome to Meteor React Shop</h1>
                <p className="lead">
                  Enjoy Your Shopping!
                </p>
              </div>
            </div>
            <hr/>
          </div>
        </div>
        <div className="container marketing">
          <div className="row">
            <ProductList products={this.props.products} />
          </div>
        </div>
      </div>
    )
  }
}

// subscribe products from server
export default createContainer(() => {
  Meteor.subscribe('products')

  return { products: Products.find({}).fetch() }
}, ProductListContainer)
