/* eslint-disable no-undef */
const { signupAsync, loginAsync } = require('../src/restServices/restServices');

describe('Testing restServices.js File', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  describe('Testing signupAsync function', () => {
    test('expect signupAsync to return user created true', async () => {
      fetch.mockResponseOnce(JSON.stringify({
        user_created: true,
      }));

      const email = 'g@g.cc';
      const password = '123';

      const response = await signupAsync(email, password);
      expect(response).toHaveProperty('user_created', true);
    });

    test('expect signupAsync to return user created false', async () => {
      fetch.mockResponseOnce(JSON.stringify({
        user_created: false,
      }));

      const email = 'gg.cc';
      const password = '123';

      const response = await signupAsync(email, password);
      expect(response).toHaveProperty('user_created', false);
    });
  });

  describe('Testing loginAsync function', () => {
    test('expect loginAsync to return logged_in true', async () => {
      fetch.mockResponseOnce(JSON.stringify({
        logged_in: true,
      }));

      const email = 'gg.cc';
      const password = '123';

      const response = await loginAsync(email, password);
      expect(response).toHaveProperty('logged_in', true);
    });

    test('expect loginAsync to return 401 Authentication error', async () => {
      fetch.mockResponseOnce(JSON.stringify({
        status: 401,
        body: 'Authentication Error.',
        headers: {
          'WWW-Authenticate': 'Basic realm="401"',
        },
      }));

      const email = 'gg.cc';
      const password = '123';

      const response = await loginAsync(email, password);
      expect(response).toHaveProperty('status', 401);
      expect(response).toHaveProperty('body', 'Authentication Error.');
      expect(response).toHaveProperty('headers', {
        'WWW-Authenticate': 'Basic realm="401"',
      });
    });
  });
});
