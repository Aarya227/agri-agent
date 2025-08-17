const express = require('express');
const router = express.Router();

const { getSchemes } = require('../controllers/schemesController');


const { askQuestion } = require('../controllers/aiController');

router.get('/schemes', getSchemes);
router.post('/ask', askQuestion);

module.exports = router;
