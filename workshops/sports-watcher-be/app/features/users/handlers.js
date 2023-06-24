const { readJsonData, writeJsonData } = require('../../common/utils/json-data');

function signIn(req, res) {
  const teams = readJsonData('teams');
  res.send('Sign in');
}

module.exports = {
  signIn,
};
