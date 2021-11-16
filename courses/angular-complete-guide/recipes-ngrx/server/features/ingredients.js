const express = require('express');
const database = require('../utils/database');
const { successResponse, errorResponse } = require('../utils/http');

const router = express.Router();
const COLLECTION = 'ingredients';

router.post('/', async (req, res) => {
  const items = await database.fetchCollection(COLLECTION);
  const newItems = Array.isArray(req.body) ? req.body : [req.body];
  for (const newItem of newItems) {
    if (items.find(anItem => anItem.name === newItem.name)) {
      const message = `Ingredient with name "${name}" already exists`;
      return res.json(errorResponse(message));
    }
    items.push(newItem);
  }
  await database.storeCollection(COLLECTION, [...items]);
  const message = 'Ingredient created';
  const data = Array.isArray(newItems) ? newItems : newItems[0];
  return res.status(201).json(successResponse(message, data));
});

// TODO: Create massive upsert
router.put('/', async (req, res) => {
  res.send('ok');
});

router.get('/', async (req, res) => {
  const items = await database.fetchCollection(COLLECTION);
  const message = 'All ingredients';
  return res.json(successResponse(message, items));
});

router.get('/:name', async (req, res) => {
  const { name } = req.params;
  const items = await database.fetchCollection(COLLECTION);
  const item = items.find((item) => item.name === name);

  if (!item) {
    const message = `No ingredient with name "${name}"`;
    return res.status(404).json(errorResponse(message));
  }

  const message = `Ingredient with name "${name}"`;
  const data = item ?? null;
  return res.json(successResponse(message, data));
});

router.patch('/:name', async (req, res) => {
  const { name } = req.params;
  const newItem = { ...req.body, name };
  let items = await database.fetchCollection(COLLECTION);
  const item = items.find((item) => item.name === name);

  if (!item) {
    const message = `No ingredient with name "${name}"`;
    return res.status(404).json(errorResponse(message));
  }

  items = items.map((anItem) => (anItem.name === name ? newItem : anItem));
  await database.storeCollection(COLLECTION, [...items]);
  const message = `Ingredient "${name}" updated`;
  return res.json(successResponse(message, newItem));
});

router.delete('/:name', async (req, res) => {
  const { name } = req.params;
  let items = await database.fetchCollection(COLLECTION);
  const item = items.find((item) => item.name === name);

  if (!item) {
    const message = `No ingredient with name "${name}"`;
    return res.status(404).json(errorResponse(message));
  }

  items = items.filter((anItem) => anItem.name !== name);
  await database.storeCollection(COLLECTION, [...items]);
  const message = `Ingredient "${name}" removed`;
  return res.json(successResponse(message, item));
});

module.exports = router;
