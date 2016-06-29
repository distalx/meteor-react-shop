import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import './methods';

export const Carts = new Mongo.Collection('carts');

// TODO Weird, doesn't work
Carts.allow({
  insert: (userId, cart) => {
    return Meteor.call('isAdmin');
  },
  update: (userId, cart) => {
    return Meteor.call('isAdmin');
  },
  remove: (userId, cart) => {
    return Meteor.call('isAdmin');
  }
});
