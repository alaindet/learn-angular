const express = require('express');
const bcrypt = require('bcrypt');
const database = require('../utils/database');
const { successResponse, errorResponse } = require('../utils/http');

const router = express.Router();
const COLLECTION = 'users';

const FAKE_AUTH_HEADER_NAME = 'recipes-authorization';
const FAKE_AUTH_HEADER_VALUE = 'super-dumb-static-token';

// router.post('/register', async (req, res) => {
//   const { email, password } = req.body;
//   const users = await database.fetchCollection(COLLECTION);
//   const user = users.find((user) => user.email === email);

//   if (user) {
//     const message = 'User already exists';
//     return res.status(409).json(errorResponse(message));
//   }

//   const hashedPassword = await bcrypt.hash(password, 10);
//   const newUser = { email, password: hashedPassword };
//   users.push(newUser);
//   await database.storeCollection(COLLECTION, [...users]);
//   const message = 'User registered';
//   const data = { token: FAKE_TOKEN };
//   return res.status(201).json(successResponse(message, data));
// });

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
  const data = {
    email,
    token: FAKE_AUTH_HEADER_VALUE,
  };
  return res.json(successResponse(message, data));
});

const fakeAuthMiddleware = (req, res, next) => {

  const publicPaths = ['/auth/login', '/auth/register'];

  if (publicPaths.includes(req.path)) {
    return next();
  }

  const authHeader = req.headers[FAKE_AUTH_HEADER_NAME];

  if (!authHeader || authHeader !== FAKE_AUTH_HEADER_VALUE) {
    const message = 'You are not authorized';
    return res.status(401).json(errorResponse(message));
  }

  return  next();
};

module.exports = {
  router,
  fakeAuthMiddleware,
};
