const router = require('express').Router()

router.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Server running successfully'
    })
})

module.exports = router