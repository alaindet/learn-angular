const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const PORT = 3000;
const FAKE_EMAIL = 'example@example.com';
const FAKE_PASSWORD = "example@example.com";
const FAKE_TOKEN = 'someverysecrettoken';

server.use(middlewares);

server.use((req, res, next) => {
 if (isAuthorized(req)) { // add your authorization logic here
   next() // continue to JSON Server router
 } else {
   res.sendStatus(401)
 }
})

server.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (email === FAKE_EMAIL && password === FAKE_PASSWORD) {
    return req.json({
      token: FAKE_TOKEN,
    });
  }
});

server.use(router);
server.listen(PORT, () => {
  console.log('JSON Server is running');
});
