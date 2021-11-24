const express = require('express');

const { COLLECTION: INGREDIENTS_COLLECTION } = require('./ingredients');
const database = require('../utils/database');
const { successResponse, errorResponse } = require('../utils/http');

const router = express.Router();
const COLLECTION = 'recipes';

router.post('/', async (req, res) => {
  const items = await database.fetchCollection(COLLECTION);
  const newItems = Array.isArray(req.body) ? req.body : [req.body];
  for (const newItem of newItems) {
    if (items.find(anItem => anItem.name === newItem.name)) {
      const message = `Recipe with name "${name}" already exists`;
      return res.json(errorResponse(message));
    }
    items.push(newItem);
  }
  await database.storeCollection(COLLECTION, [...items]);
  const message = 'Recipe created';
  const data = Array.isArray(newItems) ? newItems : newItems[0];
  return res.status(201).json(successResponse(message, data));
});


router.get('/', async (req, res) => {
  const items = await database.fetchCollection(COLLECTION);
  const message = 'All recipes';
  return res.json(successResponse(message, items));
});


router.get('/:name', async (req, res) => {
  const { name } = req.params;
  const items = await database.fetchCollection(COLLECTION);
  const item = items.find(item => item.name === name);

  if (!item) {
    const message = `No recipe with name "${name}"`;
    return res.status(404).json(errorResponse(message));
  }

  const message = `Recipe with name "${name}"`;
  const data = item ?? null;
  return res.json(successResponse(message, data));
});


router.patch('/:name', async (req, res) => {
  const { name } = req.params;
  const newItem = { ...req.body, name };
  let items = await database.fetchCollection(COLLECTION);
  const item = items.find(item => item.name === name);

  if (!item) {
    const message = `No recipe with name "${name}"`;
    return res.status(404).json(errorResponse(message));
  }

  items = items.map(anItem => (anItem.name === name) ? newItem : anItem);
  await database.storeCollection(COLLECTION, [...items]);
  const message = `Recipe "${name}" updated`;
  return res.json(successResponse(message, newItem));
});


// Adds recipe's ingredients to the shopping list
// Creates new ones
// Updates existing ones
router.put('/:name/ingredients', async (req, res) => {
  const { name } = req.params;
  const recipes = await database.fetchCollection(COLLECTION);
  const recipe = recipes.find((recipe) => recipe.name === name);
  if (!recipe) {
    const message = `No recipe with name "${name}"`;
    return res.status(404).json(errorResponse(message));
  }
  const ingredients = await database.fetchCollection(INGREDIENTS_COLLECTION);
  for (const newIngredient of recipe.ingredients) {
    const existingIndex = ingredients.findIndex(ingr => ingr.name === newIngredient.name);
    if (existingIndex !== -1) {
      ingredients[existingIndex].amount += newIngredient.amount;
    } else {
      ingredients.push(newIngredient);
    }
  }
  await database.storeCollection(INGREDIENTS_COLLECTION, [...ingredients]);
  const message = 'Recipe\'s ingredients added to the ingredients collection';
  const data = recipe.ingredients;
  return res.status(201).json(successResponse(message, data));
});


router.delete('/:name', async (req, res) => {
  const { name } = req.params;
  let items = await database.fetchCollection(COLLECTION);
  const item = items.find((item) => item.name === name);

  if (!item) {
    const message = `No recipe with name "${name}"`;
    return res.status(404).json(errorResponse(message));
  }

  items = items.filter(anItem => anItem.name !== name);
  await database.storeCollection(COLLECTION, [...items]);
  const message = `Recipe "${name}" removed`;
  return res.json(successResponse(message, item));
});


module.exports = { router, COLLECTION };
