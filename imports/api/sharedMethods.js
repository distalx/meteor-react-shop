import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

Meteor.methods({
  'isAdmin'() {
    const loggedInUser = Meteor.user();
    let result = false;

    if (loggedInUser) {
      if (Roles.userIsInRole(loggedInUser, 'admin')) {
        result = true;
      }
    }
    return result;
  }
});
