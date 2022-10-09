require('dotenv').config()
const express = require('express')
const db = require('./config/db')
const apiRoutes = require('./routes/api')
const defaultControllers = require('./controllers/default')
const cors= require('cors')

//Initializing the application
const app = express()

//Connecting to database
db.connect()

app.use(express.json())

// enabling all origins
app.use(cors())

//Routes to be used
app.use('/api', apiRoutes)

// Default routes to handle invalid routes
app.all('/', defaultControllers.Success)
app.all('*', defaultControllers.Invalid)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server started successfully on port ${PORT}`)
})