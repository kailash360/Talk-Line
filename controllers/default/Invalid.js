const invalid = (req, res) => {
    res.json({
        success: false,
        message: `${req.originalUrl} not found`
    })
}

module.exports = invalid