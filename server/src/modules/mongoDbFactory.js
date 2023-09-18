const { MongoDbConnection } = require('./mongoDbConn');

const mongo = new MongoDbConnection();

async function createMongoConnection() {
  await mongo.connect();
}

module.exports = {
  mongo,
  createMongoConnection,
};
