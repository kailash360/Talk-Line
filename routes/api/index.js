const router = require('express').Router()
const AuthController = require('../../controllers/auth/AuthController')
const UserController = require('../../controllers/api/UserController')
const PostController = require('../../controllers/api/PostController')
const { validateToken, isOwner } = require('../../middlewares')

router.post('/register', AuthController.register)
router.post('/authenticate', AuthController.authenticate)

router.get('/all_posts', validateToken, UserController.getUserPosts)
router.post('/follow/:id', validateToken, UserController.followUser)
router.post('/unfollow/:id', validateToken, UserController.unfollowUser)
router.get('/user', validateToken, UserController.getProfile)

router.post('/posts', validateToken, PostController.createPost)
router.get('/posts/:id', PostController.getPost)
router.delete('/posts/:id', validateToken, isOwner, PostController.deletePost)
router.post('/like/:id', validateToken, PostController.likePost)
router.post('/unlike/:id', validateToken, PostController.unlikePost)
router.post('/comment/:id', validateToken, PostController.addComment)

module.exports = router