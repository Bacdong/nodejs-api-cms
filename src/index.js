const express = require('express')
const morgan = require('morgan')
const path = require('path')
const routes = require('./app/routes')

const app = express()
const port = 3000

const db = require('./app/core/configs/db')

// Connect to Database
db.dbConnect()

// Use static folder
app.use(express.static(path.join(__dirname, 'public')))

// HTTP Logger
app.use(morgan('combined'))

// Routing Init
routes(app)

app.listen(port, () => {
  console.log(`Apple Store listening at http://localhost:${port}`)
})