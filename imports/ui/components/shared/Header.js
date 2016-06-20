import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { Roles } from 'meteor/alanning:roles'

import AccountsUIWrapper from './AccountsUIWrapper'

class Header extends Component {
  render () {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to='/'>Meteor React Shop</Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/cartItems"><i className="fa fa-shopping-cart"></i> 購物車(2)</Link></li>
              <li>
                { Roles.userIsInRole(Meteor.userId(), 'admin') ?
                  <Link to="/eFdeHqVzb9a2y4tA">Admin</Link> : ''
                }
              </li>
              <li><AccountsUIWrapper /></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
