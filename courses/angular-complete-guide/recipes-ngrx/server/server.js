const path = require('path');
const express = require('express');
const cors = require('cors');

const { router: authRouter, fakeAuthMiddleware } = require('./features/auth');
const { router: ingredientsRouter } = require('./features/ingredients');
const { router: recipesRouter } = require('./features/recipes');

const app = express();
const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

app.use(cors());
app.use(express.json());
app.use(express.static(PUBLIC_DIR));

app.use(fakeAuthMiddleware);
app.use('/recipes', recipesRouter);
app.use('/ingredients', ingredientsRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log(`Recipes API listening at http://localhost:${PORT}`);
});
