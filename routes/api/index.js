const router = require('express').Router()
const AuthController = require('../../controllers/auth/AuthController')

router.post('/register', AuthController.register)
router.post('/authenticate', AuthController.authenticate)

module.exports = router