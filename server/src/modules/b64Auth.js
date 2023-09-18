function extractB64FromHeader(authHeader) {
  const b64auth = (authHeader || '').split(' ')[1] || '';
  return b64auth;
}

function extractCredentialsFromB64(b64) {
  const credentials = Buffer.from(b64, 'base64').toString().split(':');
  return credentials;
}

module.exports = { extractB64FromHeader, extractCredentialsFromB64 };
