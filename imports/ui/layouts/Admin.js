import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'
import { Roles } from 'meteor/alanning:roles'
import { browserHistory } from 'react-router'

import Sidebar from '../components/admin/shared/Sidebar'

class Admin extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
  //  authenticate user
  //  TODO Weird, can't find user role when first enter the url
  //  if (!Roles.userIsInRole(Meteor.userId(), 'admin')){
    //  browserHistory.push('/')
  //  }
  }

  render() {
    return (
      <div className="wrapper">
        <Sidebar />
        {this.props.children}
      </div>
    )
  }
}

export default Admin
