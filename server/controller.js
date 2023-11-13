const { Profile, Club, User } = require('./model');
const asyncHandler = require('express-async-handler');
const { generateToken } = require('./utils/generateToken');

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


// @desc     Auth user/set token
// route     POST /api/users/auth
// @access   Public -> you don't need to be logged in to acces to this route

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }

});

// @desc     Register a new user
// route     POST /api/users
// @access   Public 

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    // console.log(name);

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({
        name,
        email,
        password
    });

    if (user) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

// @desc     Logout user
// route     POST /api/users/logout
// @access   Public 

const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Logout User' })
});

// @desc     Get user profile
// route     GET /api/users/profile
// @access   Private -> you have to have a token

const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'User Profile' })
});

// @desc     Update user profile
// route     PUT /api/users/auth
// @access   Private

const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Update user profile' })
});








module.exports = {
    getProfiles,
    postProfile,
    getProfile,
    getClubs,
    postClub,
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}


