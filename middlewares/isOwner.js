const mongoose = require('mongoose')
const { Post, User } = require('../models')
const { catchAsync } = require('../utils')

const isOwner = catchAsync(async(req, res, next) => {

    const user = await User.findOne({ _id: req.headers._id })

    const post = await Post.findOne({ _id: req.params.id })
    if (!post) return res.json({ success: false, message: 'Post not found' })

    // Check if the id of owner and user are equal ,and the post id is present in posts of user
    if (mongoose.Types.ObjectId(post.owner).equals(mongoose.Types.ObjectId(req.headers._id)) && user.posts.includes(req.params.id)) next()
    else return res.json({ success: false, message: 'You are not allowed to perform this action' })
})

module.exports = isOwner