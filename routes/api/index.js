const router = require('express').Router()
const AuthController = require('../../controllers/auth/AuthController')
const UserController = require('../../controllers/api/UserController')
const { validateToken } = require('../../middlewares')

router.post('/register', AuthController.register)
router.post('/authenticate', AuthController.authenticate)

router.post('/follow/:id', validateToken, UserController.followUser)

module.exports = router