#!/bin/bash

npm install --save faker
npm install --save react
npm install --save lodash
npm install --save stripe
npm install --save react-dom
npm install --save underscore
npm install --save react-router
npm install react-notification-system
npm install --save react-addons-pure-render-mixin

meteor add session
meteor add accounts-ui
meteor add msavin:mongol
meteor add alanning:roles
meteor add fourseven:scss
meteor add accounts-password
meteor add accounts-facebook
meteor add react-meteor-data
meteor add themeteorchef:bert # notification
meteor add twbs:bootstrap@3.3.6
meteor add practicalmeteor:mocha # testing
meteor add fortawesome:fontawesome

meteor remove insecure
meteor remove autopublish

# Clean main.html
rm client/main.html
touch client/main.html

# Create main.jsx
rm client/main.js
touch client/main.js

# Create file structure
mkdir -p imports/{startup,api,ui}
mkdir -p imports/startup/{client,server}
mkdir -p imports/ui/{components,layouts,pages}

# Setting up Routing
touch imports/ui/layouts/App.js
touch imports/startup/client/Routes.js

# environment variable
mkdir settings ; touch settings/development.json
