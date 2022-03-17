const express = require('express');
const router = express.Router();

const videoCtrl = require('../controllers/video.js');
const videoMdl = require('../middlewares/video.js');

router.get('', videoMdl.headers, videoMdl.url, videoCtrl.playOneVideo);

module.exports = router;  