const express = require('express');
const router = express.Router();

const MajorProjectController = require('../controller/Project.Controller');



router.get('/', MajorProjectController.getMajorProjectsList);

router.post('/', MajorProjectController.createNewmajor);



module.exports = router;