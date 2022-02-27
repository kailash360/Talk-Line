const { Post } = require('../../models')
const { catchAsync } = require('../../utils')

exports.createPost = catchAsync(async(req, res) => {

    if (!req.body.title || !req.body.description) return res.json({ success: false, message: 'Title and description are required' })

    const post = await Post.create({
        title: req.body.title,
        description: req.body.description,
        owner: req.headers._id,
        date: new Date().toUTCString(),
        likes: 0,
        comments: []
    })

    return res.json({ success: true, data: { post } })

})