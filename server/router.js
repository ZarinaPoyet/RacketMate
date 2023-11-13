const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/profiles', controller.getProfiles);
router.post('/profiles', controller.postProfile);

router.get('/profiles/:id', controller.getProfile);

router.get('/clubs', controller.getClubs);
router.post('/clubs', controller.postClub);

router.post('/auth', controller.authUser);


module.exports = router;