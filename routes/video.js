const express = require('express');
const router = express.Router();

const videoCtrl = require('../controllers/video.js');

router.get('/', videoCtrl.default);
router.get('/:id', videoCtrl.playOneVideo);

module.exports = router;