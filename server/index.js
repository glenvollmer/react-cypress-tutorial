const express = require('express');
const authRoutes = require('./src/routes/authentication');
const { createMongoConnection } = require('./src/modules/mongoDbFactory');

const app = express();
const port = 3000;
// eslint-disable-next-line no-unused-expressions
(async () => createMongoConnection())();

app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
