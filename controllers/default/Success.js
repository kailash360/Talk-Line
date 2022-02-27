const Success = (req, res) => {
    res.json({
        success: true,
        message: 'Server is up and running'
    })
}

module.exports = Success