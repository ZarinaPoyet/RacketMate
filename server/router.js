const express = require('express');
const {
    getProfiles,
    postProfile,
    getProfile,
    getClubs,
    postClub,
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile } = require('./controller');

const router = express.Router();

router.get('/profiles', getProfiles);
router.post('/profiles', postProfile);

router.get('/profiles/:id', getProfile);

router.get('/clubs', getClubs);
router.post('/clubs', postClub);


router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router
    .route('/profile')
    .get(getUserProfile)
    .put(updateUserProfile);


module.exports = router;

