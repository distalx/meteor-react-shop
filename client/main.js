import { Meteor } from 'meteor/meteor'
import React from 'react'
import ReactDOM from 'react-dom'

import Routes from '../imports/startup/client/Routes'
import '../imports/startup/client/accounts-config'

// wait for the dom fully rendered
Meteor.startup(() => {
  ReactDOM.render(Routes, document.querySelector('.render-target'));
});
