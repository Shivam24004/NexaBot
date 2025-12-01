const express = require('express');
const router = express.Router();

const {apiController} = require('../Controllers/apiController.js');

router.post('/generate',apiController);

module.exports = router;
