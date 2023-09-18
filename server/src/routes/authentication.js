const express = require('express');
const bodyParser = require('body-parser');

const { loginUser } = require('../modules/loginModules');
const { signupUser } = require('../modules/signupModules');
const { extractB64FromHeader, extractCredentialsFromB64 } = require('../modules/b64Auth');

const jsonParser = bodyParser.json();

const router = express.Router();

router.post('/login', async (req, res) => {
  const authHeader = req.headers.authorization;
  const b64AuthHeader = extractB64FromHeader(authHeader);

  const [login, password] = extractCredentialsFromB64(b64AuthHeader);
  const userAuthenticated = await loginUser(login, password);

  if (userAuthenticated) {
    res.json({ logged_in: true });
  } else {
    res.set('WWW-Authenticate', 'Basic realm="401"');
    res.status(401).send('Authentication Error.');
  }

  return res;
});

router.post('/signup', jsonParser, async (req, res) => {
  const { email, password } = req.body;
  const userCreated = signupUser(email, password);

  res.json({
    user_created: userCreated,
  });
});

module.exports = router;
