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

// const clubSchema = new mongoose.Schema({
//     name: String
// })

const Profile = mongoose.model('Profile', profileSchema);
// const Club = mongoose.model('Club', clubSchema)

module.exports = Profile;