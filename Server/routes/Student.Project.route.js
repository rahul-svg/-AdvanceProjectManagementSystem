const express = require('express');
const router = express.Router();
const studentController = require('../controller/Project.Controller')


router.post('/', studentController.createNewStudent);



module.exports = router;