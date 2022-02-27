require('dotenv').config()
const express = require('express')
const db = require('./config/db')
const apiRoutes = require('./routes/api')
const defaultControllers = require('./controllers/default')

const app = express()

db.connect()

app.use(express.json())
app.use('/api', apiRoutes)

app.all('/', defaultControllers.Success)
app.all('*', defaultControllers.Invalid)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server started successfully on port ${PORT}`)
})