const bcrypt = require('bcrypt');

const { mongo } = require('./mongoDbFactory');

async function loginUser(login, password) {
  const usersCollection = await mongo.db.collection('users');
  const results = await usersCollection.findOne({ email: login });
  let passwordCompare;

  if (results) {
    passwordCompare = await bcrypt.compare(password, results.password);
  } else {
    return false;
  }

  if (login
    && password
    && login === results.email
    && passwordCompare) {
    return true;
  }

  return false;
}

module.exports = { loginUser };
