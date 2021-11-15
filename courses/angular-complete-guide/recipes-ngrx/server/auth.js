const express = require('express');
const bcrypt = require('bcrypt');
const database = require('./utils/database');
const successResponse = require('./utils/success-response');
const errorResponse = require('./utils/error-response');

const router = express.Router();
const COLLECTION = 'users';

const FAKE_TOKEN = 'some-super-secret-token';

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const users = await database.fetchCollection(COLLECTION);
  const user = users.find((user) => user.email === email);

  if (!user) {
    const message = 'Wrong and/or missing credentials';
    return res.status(401).json(errorResponse(message));
  }

  const passwordsMatch = await bcrypt.compare(password, user.password);

  if (!passwordsMatch) {
    const message = 'Wrong and/or missing credentials';
    return res.status(401).json(errorResponse(message));
  }

  const message = 'Login successfull';
  const data = { token: FAKE_TOKEN };
  return res.json(successResponse(message, data));
});

const authMiddleware = (req, res, next) => {
  console.log("Running auth middlware...");
  // TODO...
};

module.exports = { router, authMiddleware };
