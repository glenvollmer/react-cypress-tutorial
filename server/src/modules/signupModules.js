const bcrypt = require('bcrypt');

const { mongo } = require('./mongoDbFactory');

async function createPasswordHash(password) {
  const saltRounds = 10;

  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  return hash;
}

async function signupUser(email, password) {
  const hash = await createPasswordHash(password);

  const userDocument = {
    email,
    password: hash,
  };

  try {
    const usersCollection = await mongo.db.collection('users');
    usersCollection.insertOne(userDocument);
    return true;
  } catch (error) {
    return false;
  }
}

module.exports = { signupUser, createPasswordHash };
