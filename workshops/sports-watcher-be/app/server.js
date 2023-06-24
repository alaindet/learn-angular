const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const teamsRoutes = require('./features/teams/routes');
const matchesRoutes = require('./features/matches/routes');
const usersRoutes = require('./features/users/routes');

dotenv.config();
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use('/teams', teamsRoutes);
app.use('/matches', matchesRoutes);
app.use('/users', usersRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
