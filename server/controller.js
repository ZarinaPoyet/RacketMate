const Profile = require('./model');

async function getProfiles(req, res) {
    try {
        const profiles = await Profile.find();
        res.json(profiles);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function postProfile(req, res) {
    try {
        const newProfile = await Profile.create(req.body)
        res.status(201).json(newProfile);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Internal server error' });
    }
}

async function getProfile(req, res) {
    try {
        // console.log('ID ==> ', req.params)
        const profile = await Profile.findById(req.params.id);
        if (!profile) {
            return res.status(404).json({ error: 'Profile not found' });
        }
        res.json(profile);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { getProfiles, postProfile, getProfile }


