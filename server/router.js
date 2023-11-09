const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/profiles', controller.getProfiles);
router.post('/profiles', controller.postProfile);


module.exports = router;