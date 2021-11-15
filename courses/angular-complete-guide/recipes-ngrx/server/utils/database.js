const fs = require('fs');
const path = require('path');
const filesystem = require('./filesystem');

const DATABASE_PATH = path.join(__dirname, '..', 'db', 'db.json');

const fetchDatabase = async () => {
  const fileExists = await filesystem.fileExists(DATABASE_PATH);
  if (!fileExists) return {};
  const options = { encoding: 'utf-8' };
  const rawData = await fs.promises.readFile(collectionPath, optios);
  return JSON.parse(rawData);
};

const storeDatabase = async (rawData) => {
  const data = JSON.stringify(rawData);
  await fs.promises.writeFile(DATABASE_PATH, data);
};

const fetchCollection = async (name) => {
  const db = await fetchDatabase();
  return db[name] ?? [];
};

const storeCollection = async (name, rawData) => {
  const db = await fetchDatabase();
  db[name] = rawData;
  await storeDatabase(db);
};

module.exports = {
  fetchCollection,
  storeCollection,
};
