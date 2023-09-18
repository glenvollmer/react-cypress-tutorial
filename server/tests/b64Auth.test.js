/* eslint-disable no-undef */
const { extractB64FromHeader, extractCredentialsFromB64 } = require('../src/modules/b64Auth');

describe('Testing b64Auth.js File', () => {
  describe('Testing extractB64FromHeader function', () => {
    test('expect extractB64FromHeader to return b64 string', () => {
      const header = 'Basic Z0BnLmNjOjEyMw==';
      const b64AuthHeader = extractB64FromHeader(header);
      expect(b64AuthHeader).toMatch('Z0BnLmNjOjEyMw==');
    });

    test('expect extractB64FromHeader to return empty string if bad header', () => {
      const header = 'BicZ0BnLmNjOMw==';
      const b64AuthHeader = extractB64FromHeader(header);
      expect(b64AuthHeader).toMatch('');
    });
  });

  describe('Testing extractCredentialsFromB64 function', () => {
    test('expect extractCredentialsFromB64 to return an array of credentials', () => {
      const b64 = 'Z0BnLmNjOjEyMw==';
      const credentials = extractCredentialsFromB64(b64);
      expect(credentials).toContain('g@g.cc');
      expect(credentials).toContain('123');
    });

    test('expect extractCredentialsFromB64 to return an array of with 2 items', () => {
      const b64 = 'Z0BnLmNjOjEyMw==';
      const credentials = extractCredentialsFromB64(b64);
      expect(credentials.length).toBe(2);
    });
  });
});
