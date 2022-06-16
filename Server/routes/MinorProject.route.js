const express = require('express');
const router = express.Router();

const MinorProjectController = require('../controller/Project.Controller')


// Get ALL Minor

router.get('/', MinorProjectController.getMinorProjectsList);

// create New Minor

router.post('/', MinorProjectController.createNewminor );








module.exports = router;