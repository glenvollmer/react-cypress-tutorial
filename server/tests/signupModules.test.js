/* eslint-disable no-undef */
const { signupUser, createPasswordHash } = require('../src/modules/signupModules');
const { createMongoConnection, mongo } = require('../src/modules/mongoDbFactory');

describe('Testing signupModules.js File', () => {
  beforeAll(async () => {
    await createMongoConnection();
  });

  afterAll(async () => {
    await mongo.disconnect();
  });

  describe('Testing signupUser function', () => {
    test('expect signupUser to return true with valid credentials', async () => {
      const email = 'g@g.cc';
      const password = '123';
      const userRegistered = await signupUser(email, password);
      expect(userRegistered).toBe(true);
    });
  });

  describe('Testing createPasswordHash function', () => {
    test('expect createPasswordHash to return a hash string', async () => {
      const password = '123';
      const hash = await createPasswordHash(password);
      expect(hash.length > 0).toBe(true);
      expect(typeof (hash)).toBe(typeof (''));
    });
  });
});
