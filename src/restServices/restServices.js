const { makeReqBody, createAuthBuffer } = require('../modules/requestModules');

const baseUrl = '127.0.0.1:3111';

async function signupAsync(email, password) {
  const body = makeReqBody({
    email,
    password,
  });

  return fetch(`${baseUrl}/auth/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body,
  }).then((res) => res.json());
}

async function loginAsync(email, password) {
  const base64encodedData = createAuthBuffer(email, password);

  return fetch(`${baseUrl}/auth/login`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Basic ${base64encodedData}`,
    },
  }).then((res) => res.json());
}

module.exports = { signupAsync, loginAsync };
