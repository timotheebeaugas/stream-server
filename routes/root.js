const express = require('express');
const router = express.Router();

const rootCtrl = require('../controllers/root.js');

router.get('/', rootCtrl.default);

module.exports = router;