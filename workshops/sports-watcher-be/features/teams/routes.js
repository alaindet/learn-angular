const express = require('express');

const handlers = require('./handlers');

const router = express.Router();

router.get('/', handlers.getTeams);
router.post('/', handlers.createTeam);
router.delete('/:id', handlers.deleteTeam);

module.exports = router;
