const jwt = require('jsonwebtoken');
const { User } = require('../models')
const { catchAsync } = require('../utils')

/**
 * @middleware to validate the jwt token
 * for authenticating the user
 */
const validateToken = catchAsync(async(req, res, next) => {

    jwt.verify(req.headers.token, process.env.JWT_KEY, async(err, decoded) => {

        if (err) return res.json({ success: false, message: err.message });

        const user = await User.findOne({ _id: decoded.user._id });
        if (!user) return res.json({ success: false, message: 'User not found' })

        req.headers = {...req.headers, ...decoded.user }
        next()
    })

});

module.exports = validateToken