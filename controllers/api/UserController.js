const mongoose = require('mongoose');
const { User } = require('../../models')
const { catchAsync } = require('../../utils')

exports.followUser = catchAsync(async(req, res) => {

    if (!mongoose.isValidObjectId(req.params.id)) return res.json({ success: false, message: 'Invalid user id' })

    //Check if the user is trying to follow himself/herself
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

    return res.json({
        success: true,
        message: 'Successfully followed the user'
    })

})

exports.unfollowUser = catchAsync(async(req, res) => {

    if (!mongoose.isValidObjectId(req.params.id)) return res.json({ success: false, message: 'Invalid user id' })

    //Check if the user is trying to follow himself/herself
    if (req.params.id === req.headers._id) return res.json({ success: false, message: 'User cannot unfollow himself/herself' })

    // Fetch the user who has unfollowed
    const unfollowingUser = await User.findOne({ _id: req.headers._id })

    //Check if unfollowed user exists in the list of followers
    if (!unfollowingUser.following.includes(req.params.id)) return res.json({ success: false, message: 'You do not follow the user already' })

    // remove the unfollowed user from the list of following
    unfollowingUser.following = unfollowingUser.following.filter(id => !mongoose.Types.ObjectId(id).equals(mongoose.Types.ObjectId(req.params.id)))
    await unfollowingUser.save()

    // Remove the id of the unfollowing user from the list of the followers for the person who got unfollowed
    const unfollowedUser = await User.findOne({ _id: req.params.id })
    unfollowedUser.followers = unfollowedUser.followers.filter(id => !mongoose.Types.ObjectId(id).equals(mongoose.Types.ObjectId(req.headers._id)))
    await unfollowedUser.save()

    return res.json({
        success: true,
        message: 'Successfully unfollowed the user'
    })
})