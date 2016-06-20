import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import NoFound from '../../ui/pages/NoFound'

import App from '../../ui/layouts/App'
import ProductListContainer from '../../ui/components/product/ProductListContainer'
import ProductMain from '../../ui/components/product/ProductMain'
import CartItemListContainer from '../../ui/components/cart/CartItemListContainer'
import CheckoutContainer from '../../ui/components/checkout/CheckoutContainer'

import Admin from '../../ui/layouts/Admin'

export default routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={ProductListContainer} />
      <Route path='products/:productId' component={ProductMain} />
      <Route path='cartItems' component={CartItemListContainer} />
      <Route path='checkout' component={CheckoutContainer} />
    </Route>

    <Route path='/eFdeHqVzb9a2y4tA' component={Admin}>
    </Route>

    <Route path="*" component={NoFound}/>
  </Router>
)
