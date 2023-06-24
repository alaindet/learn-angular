const jwt = require('jsonwebtoken');

// https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs
export function authenticateToken(req, res, next) {

  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).send({
      message: 'Please sign in and try again',
    });
  }

  const [_, token] = authHeader.split(' ');

  if (token == null) {
    return res.status(401).send({
      message: 'Invalid token',
    });
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    console.log(err)

    if (err) return res.sendStatus(403)

    req.user = user

    next()
  })
}
