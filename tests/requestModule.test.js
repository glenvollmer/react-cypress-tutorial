/* eslint-disable no-undef */
const { makeReqBody, createAuthBuffer } = require('../src/modules/requestModules');

describe('Testing requestModules.js File', () => {
  describe('Testing makeReqBody function', () => {
    test('expect makeReqBody to return a json string', () => {
      const data = '{}';
      const body = makeReqBody(data);

      expect(typeof (body)).toBe(typeof (''));
    });
  });

  describe('Testing createAuthBuffer function', () => {
    test('expect createAuthBuffer to return a base64 string', () => {
      const email = 'g@g.cc';
      const password = '123';
      const buffer = createAuthBuffer(email, password);
      expect(typeof (buffer)).toBe(typeof (''));
    });

    test('expect createAuthBuffer to return base64', () => {
      const email = 'g@g.cc';
      const password = '123';
      const buffer = createAuthBuffer(email, password);
      expect(buffer).toBe('Z0BnLmNjOjEyMw==');
    });
  });
});
