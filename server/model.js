const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/profiles')
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));

const profileSchema = new mongoose.Schema({
    name: String,
    surname: String,
    gender: String,
    skill_level: String,
    club: String
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;