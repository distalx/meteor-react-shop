import { Meteor } from 'meteor/meteor'

Meteor.methods({
  'isAdmin'() {
    const loggedInUser = Meteor.user()
    let result = false

    if (loggedInUser) {
      if (Roles.userIsInRole(loggedInUser, 'admin')) {
        result = true
      }
    }
    return result
  },
})
