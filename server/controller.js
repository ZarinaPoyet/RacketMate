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

module.exports = { getProfiles, postProfile }


