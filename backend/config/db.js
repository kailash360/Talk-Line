const mongoose = require('mongoose');
const connect = () => {
    mongoose.connect(
        process.env.MONGO_DB_URI, () => {
            console.log('Connected to database successfully')
        }
    ).catch(e => {
        console.log('Error connecting to database:', e.message)
    })
}

module.exports = { connect }