## Meteor React Shop

#### Barriers


##### 2. User Management

In `Admin.js`, I can't read role in `componentWillMount` function.

It will return undefined although I using admin account.

##### 3. Pass one component state to another

Let `TermsAndConditions.js` to know whether user has filled name, email, address and so on.

So I can hide some message.

#### Use development settings

```
meteor --settings ./settings/development.json
```

#### Add Admin User

Enter Mongo Shell

```
meteor mongo
```

Type the following

```
db.users.update( {_id: 'xxx'}, { $set: { roles: ['admin'] } } )
```
