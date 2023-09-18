const { Buffer } = require('buffer');

function makeReqBody(data) {
  return JSON.stringify(data);
}

function createAuthBuffer(email, password) {
  const bufferStr = `${email}:${password}`;
  // eslint-disable-next-line new-cap
  const base64encodedData = new Buffer.from(bufferStr).toString('base64');
  return base64encodedData;
}

module.exports = { makeReqBody, createAuthBuffer };
