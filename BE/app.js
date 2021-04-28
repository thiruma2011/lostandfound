// app.js

const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')

// routes
const lostitems = require('./routes/api/lostitems')
const founditems = require('./routes/api/founditems')
const users = require('./routes/api/users')

const app = express()

// Connect Database
connectDB()

// cors
app.use(cors({ origin: true, credentials: true }))

// Init Middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.send('Hello world!'))

// use Routes
app.use('/api/lostitems', lostitems)
app.use('/api/founditems', founditems)
app.use('/api/users', users)

const port = process.env.PORT || 8082

app.listen(port, () => console.log(`Server running on port ${port}`))
