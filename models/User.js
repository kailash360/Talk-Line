const mongoose = require('mongoose');
const Constants = require('../constants')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validator: [
            (email) => Constants.REGEX_FOR_EMAIL.test(email),
            'Please provide a valid email address'
        ]
    },
    password: {
        type: String,
        required: true
    },
    followers: [{
        type: mongoose.Types.ObjectId,
        required: true
    }],
    following: [{
        type: mongoose.Types.ObjectId,
        required: true
    }],
    posts: [{
        type: mongoose.Types.ObjectId,
        ref: 'Post'
    }],
    comments: [{
        type: mongoose.Types.ObjectId,
        ref: 'Comment'
    }],
    liked: [{
        type: mongoose.Types.ObjectId,
        ref: 'Post'
    }]
})

const User = mongoose.model('User', UserSchema)
module.exports = User