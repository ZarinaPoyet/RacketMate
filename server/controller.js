const { Profile, Club } = require('./model');

// async function getProfiles(req, res) {
//     try {
//         const profiles = await Profile.find();
//         res.json(profiles);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// }

async function getProfiles(req, res) {
    try {
        console.log(req.query, req.params)
        const query = {};
        if (req.query.gender) {
            query.gender = req.query.gender.toLowerCase();
        }
        if (req.query.skill_level) {
            query.skill_level = req.query.skill_level.toLowerCase();
        }
        if (req.query.club) {
            query.club = req.query.club;
        }

        console.log('server query:', query);
        const profiles = await Profile.find(query);
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
        res.status(500).json({ error: 'Internal server error' });
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

async function getClubs(req, res) {
    try {
        const profiles = await Club.find();
        res.json(profiles);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function postClub(req, res) {
    try {
        const newProfile = await Club.create(req.body)
        res.status(201).json(newProfile);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { getProfiles, postProfile, getProfile, getClubs, postClub }


