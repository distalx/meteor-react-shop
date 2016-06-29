import { Meteor } from 'meteor/meteor';
import { Carts } from '../carts';

Meteor.publish('cart', function(userId) {
  return Carts.find({userId: userId});
});
