const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const { User } = require('../../models')
const { catchAsync } = require('../../utils')

exports.register = catchAsync(async(req, res) => {

    if (!req.body.username || !req.body.password || !req.body.email) return res.json({ success: false, message: 'All fields are required' })

    const emailTaken = await User.exists({ email: req.body.email })
    if (emailTaken) return res.json({ success: false, message: 'Email already taken' })

    const usernameTaken = await User.exists({ username: req.body.username })
    if (usernameTaken) return res.json({ success: false, message: 'Username already taken' })

    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    })

    return res.json({ success: true, data: { user } })
})

exports.authenticate = catchAsync(async(req, res) => {

    if (!req.body.email || !req.body.password) return res.json({ success: false, message: 'All fields are required' })

    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.json({ success: false, message: 'Invalid credentials' })

    const passwordMatches = await bcrypt.compare(req.body.password, user.password)
    if (!passwordMatches) return res.json({ success: false, message: 'Invalid credentials' })

    const userDetails = await User.findOne({ email: req.body.email }).select('_id username email')
    const token = jwt.sign({ user: userDetails }, process.env.JWT_KEY)

    return res.json({ success: true, data: { user: userDetails, token } })
})