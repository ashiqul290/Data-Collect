const express = require('express');
const { AddInfoController, GetInfoController, UpdateInfoController } = require('../Controller/info.controller');
const router = express.Router();

router.post('/add-info', AddInfoController);
router.get('/all-info', GetInfoController)
router.patch('/update-info/:id', UpdateInfoController);

module.exports = router;