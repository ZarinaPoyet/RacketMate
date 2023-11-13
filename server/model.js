const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

const clubSchema = new mongoose.Schema({
    name: String
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
});

const Profile = mongoose.model('Profile', profileSchema);
const Club = mongoose.model('Club', clubSchema);
const User = mongoose.model('User', userSchema)

module.exports = { Profile, Club, User }