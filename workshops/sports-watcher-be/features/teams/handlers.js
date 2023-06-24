const { readJsonData, writeJsonData } = require('../../common/utils/json-data');

function getTeams(req, res) {
  const teams = readJsonData('teams');
  res.send(teams);
}

function createTeam(req, res) {
  console.log(req.body);
  res.send('Create new team');
}

function deleteTeam(req, res) {
  console.log(req.params.id);
  res.send('Delete team');
}

module.exports = {
  getTeams,
  createTeam,
  deleteTeam,
};
