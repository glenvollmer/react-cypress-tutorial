/* eslint-disable no-undef */
const { MongoDbConnection } = require('../src/modules/mongoDbConn');

describe('Testing dbConn.js File', () => {
  let mongo;

  beforeAll(async () => {
    mongo = new MongoDbConnection();
    await mongo.connect();
  });

  afterAll(async () => {
    await mongo.disconnect();
  });

  describe('Testing dbConn function', () => {
    test('expect mongo to be an instance of MongoDbConnection', async () => {
      expect(mongo).toBeInstanceOf(MongoDbConnection);
    });

    test('expect mongo.db to be called react-cypress-tutorial', async () => {
      const dbName = mongo.db.databaseName;
      expect(dbName).toBe('react-cypress-tutorial');
    });

    test('expect mongo to have a collection called users', async () => {
      const collections = await mongo.db.listCollections().toArray();
      const userCollection = collections[0];
      expect(userCollection.name).toBe('users');
    });
  });
});
