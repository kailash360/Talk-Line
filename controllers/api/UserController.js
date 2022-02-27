const mongoose = require('mongoose');
const { User } = require('../../models')
const { catchAsync } = require('../../utils')

exports.followUser = catchAsync(async(req, res) => {

    if (!mongoose.isValidObjectId(req.params.id)) return res.json({ success: false, message: 'Invalid user id' })

    //Check if the user to follow himself
    if (req.params.id === req.headers._id) return res.json({ success: false, message: 'User cannot follow himself/herself' })

    // Fetch the user who has followed
    const followingUser = await User.findOne({ _id: req.headers._id })

    //Check if followed user already exists in the list of followers
    if (followingUser.following.includes(req.params.id)) return res.json({ success: false, message: 'Already following the user' })

    // add the foolowed user to the list of following
    followingUser.following.push(req.params.id)
    await followingUser.save()

    // Add the id of the following user to the list of the followers for the person who got followed
    const followedUser = await User.findOne({ _id: req.params.id })
    followedUser.followers.push(req.headers._id)
    await followedUser.save()

    return res.json({ success: true, message: 'Followers updated successfully' })

})