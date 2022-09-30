const catchAsync = (callback) => {
    return (request, response, next) => {
        callback(request, response, next)
            .catch(err => {
                return response.json({ success: false, message: err.message })
            })
    }
}

module.exports = catchAsync