const express = require('express');
const router = express.Router();

const videoCtrl = require('../controllers/video.js');
const videoMdl = require('../middlewares/video.js');

router.get('', /* videoMdl.headers, videoMdl.url, */ videoCtrl.list);
router.get('/:resolution', /* videoMdl.headers, videoMdl.url, */ videoCtrl.bandwidth);
router.get('/:segment', /* videoMdl.headers, videoMdl.url, */ videoCtrl.segment);

module.exports = router;  