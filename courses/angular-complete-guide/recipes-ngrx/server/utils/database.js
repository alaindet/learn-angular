const fs = require('fs');
const path = require('path');

const DATABASE_DIR = path.join(__dirname, '..', 'db');

const getCollectionPath = (name) => path.join(DATABASE_DIR, `${name}.json`);

const fileExists = async (filePath) => {
  try {
    await fs.promises.access(filePath, fs.constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
};

const fetchCollection = async (name) => {
  const collectionPath = getCollectionPath(name);
  if (!fileExists(collectionPath)) {
    return [];
  }
  const rawData = await fs.promises.readFile(collectionPath);
  return JSON.parse(rawData);
};

const storeCollection = async (name, rawData) => {
  const collectionPath = getCollectionPath(name);
  const data = JSON.stringify(rawData);
  return await fs.promises.writeFile(collectionPath, data);
};

module.exports = {
  fetchCollection,
  storeCollection,
};
