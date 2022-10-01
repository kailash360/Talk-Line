const mongoose = require('mongoose')
const { Post, User, Comment } = require('../../models')
const { catchAsync } = require('../../utils')

/**
 * @name getPost
 * @description
 * to get the posts created by the user,
 * including details of likes, comments
 */
exports.getPost = catchAsync(async(req, res) => {

    if (!req.params.id) return res.json({ success: false, message: 'Post ID is required' })

    // fetch the post
    const post = await
    Post.findOne({ _id: req.params.id })
        .populate('likedBy', 'username email') // get the uername and email of the liked user
        .populate('comments') // populate the comments

    // check if post is not found
    if (!post) return res.json({ success: false, message: 'Post not found' })

    return res.json({ success: true, data: { post } })
})

/**
 * @name createPost
 * @description
 * To create a new post
 */
exports.createPost = catchAsync(async(req, res) => {

    if (!req.body.title || !req.body.description) return res.json({ success: false, message: 'Title and description are required' })

    // create the post
    const post = await Post.create({
        title: req.body.title,
        description: req.body.description,
        owner: req.headers._id,
        date: new Date().toUTCString()
    })

    // Add the post to the list of posts by the user
    const user = await User.findOne({ _id: req.headers._id })
    user.posts.push(post._id)
    await user.save()

    return res.json({ success: true, data: { post } })

})

/**
 * @name deletePost
 * @description'
 * to delete a post created by the user
 */
exports.deletePost = catchAsync(async(req, res) => {

    if (!req.params.id) return res.json({ success: false, message: 'Post ID is required' })

    const post = await Post.findOne({ _id: req.params.id })
    if (!post) return res.json({ success: false, message: 'Post not found' })

    await Post.deleteOne({ _id: req.params.id })

    //Remove the deleted post from the list of posts by the users
    const user = await User.findOne({ _id: req.headers._id })
    user.posts = user.posts.filter(id => !mongoose.Types.ObjectId(id).equals(mongoose.Types.ObjectId(req.params.id)))
    await user.save()

    return res.json({ success: true, message: 'Post deleted successfully' })
})

/**
 * @name likePost
 * @description
 * To like a post
 */
exports.likePost = catchAsync(async(req, res) => {

    if (!req.params.id) return res.json({ success: false, message: 'Post ID is required' })

    const post = await Post.findOne({ _id: req.params.id })
    const user = await User.findOne({ _id: req.headers._id })

    //check if the user has already liked the post
    if (user.liked.includes(req.params.id) || post.likedBy.includes(req.headers._id)) return res.json({ success: false, message: 'You have already liked this post' })

    // Add the post to the liked posts
    user.liked.push(post._id)
    await user.save()

    // Add the user id to the likedBy for the post
    post.likedBy.push(user._id)
    await post.save()

    return res.json({ success: true, message: 'Post liked successfully' })

})


/**
 * @name unlikePost
 * @description
 * To unlike a post
 */
exports.unlikePost = catchAsync(async(req, res) => {

    if (!req.params.id) return res.json({ success: false, message: 'Post ID is required' })

    const post = await Post.findOne({ _id: req.params.id })
    const user = await User.findOne({ _id: req.headers._id })

    //check if the user has not liked the post
    if (!user.liked.includes(req.params.id) || !post.likedBy.includes(req.headers._id)) return res.json({ success: false, message: 'You have not liked this post' })

    // Remove the post from the liked posts of the user
    user.liked = user.liked.filter(id => !mongoose.Types.ObjectId(id).equals(mongoose.Types.ObjectId(req.params.id)))
    await user.save()

    // Removethe user id from the likedBy of the post
    post.likedBy = post.likedBy.filter(id => !mongoose.Types.ObjectId(id).equals(mongoose.Types.ObjectId(req.headers._id)))
    await post.save()

    return res.json({ success: true, message: 'Post unliked successfully' })
})


/**
 * @name addcomment
 * @description
 * to add comment in a post
 */
exports.addComment = catchAsync(async(req, res) => {

    if (!req.params.id) return res.json({ success: false, message: 'Post ID is required' })
    if (!req.body.comment) return res.json({ success: false, message: 'Comment cannot be empty' })

    // check if the post is valid
    const post = await Post.findOne({ _id: req.params.id })
    if (!post) return res.json({ success: false, message: 'Invalid post ID' })

    // create the comment
    const comment = await Comment.create({
        owner: req.headers._id,
        post: req.params.id,
        description: req.body.description
    })

    // Add the comment to post
    post.comments.push(comment._id)
    await post.save()

    return res.json({
        success: true,
        data: {
            commentId: comment._id
        }
    })

})