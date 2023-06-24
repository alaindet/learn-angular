function getMatches(req, res) {
  res.send('Get all matches');
}

function createMatch(req, res) {
  console.log(req.body);
  res.send('Create new match');
}

function deleteMatch(req, res) {
  console.log(req.params.id);
  res.send('Delete match');
}

module.exports = {
  getMatches,
  createMatch,
  deleteMatch,
};
