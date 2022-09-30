const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    post: {
        type: mongoose.Types.ObjectId,
        ref: 'Post'
    },
    description: {
        type: String,
        required: true
    }
})

const Comment = new mongoose.model('Comment', CommentSchema)
module.exports = Comment