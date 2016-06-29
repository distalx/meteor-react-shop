import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import Faker from 'faker';
import _ from 'lodash';

import { Products } from '../../api/products/products';

// create admin
if( Meteor.users.find().count() === 0 ) {
  const id = Accounts.createUser({
    username : "admin",
    email: "admin@test.com",
    password: "admin",
    profile: { name: "admin" },
    roles : []
  });

  Roles.addUsersToRoles(id, ["admin"]);

  console.log("Added Admin user...");
}

// create product
const numberRecords = Products.find({}).count();

if(!numberRecords){
  // generate fake products
  _.times(200, () => {
    const name = Faker.name.findName();

    Products.insert({
      name,
      price: Math.floor(Math.random() * 1000),
      image: 'http://dummyimage.com/222x222/'
    });
  });

  console.log("Create Initial Products");
}
