import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import _ from 'underscore'

import './methods'

import { Carts } from '../carts/carts'

export const Products = new Mongo.Collection('products')

// TODO Weird, doesn't work
Products.allow({
  insert: (userId, product) => {
    return Meteor.call('isAdmin')
  },
  update: (userId, product) => {
    return Meteor.call('isAdmin')
  },
  remove: (userId, product) => {
    return Meteor.call('isAdmin')
  }
})
