const express = require('express');
const { AddInfoController, GetInfoController } = require('../Controller/info.controller');
const router = express.Router();

router.post('/add-info', AddInfoController);
router.get('/all-info', GetInfoController)

module.exports = router;