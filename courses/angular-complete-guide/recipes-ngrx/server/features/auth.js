const express = require('express');
const bcrypt = require('bcrypt');
const database = require('../utils/database');
const { successResponse, errorResponse } = require('../utils/http');

const router = express.Router();
const COLLECTION = 'users';

const FAKE_TOKEN = 'some-super-secret-token';

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const users = await database.fetchCollection(COLLECTION);
  const user = users.find((user) => user.email === email);

  if (user) {
    const message = 'User already exists';
    return res.status(409).json(errorResponse(message));
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { email, password: hashedPassword };
  users.push(newUser);
  await database.storeCollection(COLLECTION, [...users]);
  const message = 'User registered';
  const data = { token: FAKE_TOKEN };
  return res.status(201).json(successResponse(message, data));
});

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
  next();
  // TODO...
};

module.exports = { router, authMiddleware };
