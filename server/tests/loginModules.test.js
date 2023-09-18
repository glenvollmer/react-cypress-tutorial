/* eslint-disable no-undef */
const { loginUser } = require('../src/modules/loginModules');
const { createMongoConnection, mongo } = require('../src/modules/mongoDbFactory');

describe('Testing loginModules.js File', () => {
  beforeAll(async () => {
    await createMongoConnection();
  });

  afterAll(async () => {
    await mongo.disconnect();
  });

  describe('Testing loginUser function', () => {
    test('expect loginModules to return true with valid credentials', async () => {
      const email = 'g@g.cc';
      const password = '123';
      const userLoggedIn = await loginUser(email, password);
      expect(userLoggedIn).toBe(true);
    });

    test('expect loginModules to return false with invalid credentials', async () => {
      const email = 'gg@gg.cc';
      const password = '12';
      const userLoggedIn = await loginUser(email, password);
      expect(userLoggedIn).toBe(false);
    });
  });
});
