const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')
const user_routes = require('./routes/user')
const serverless = require('serverless-http')  // FIXED typo

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: '*' }))

// routes register
app.use('/user', user_routes)

// export for Lambda
module.exports.handler = serverless(app)

// app.listen is not needed in Lambda
// app.listen(8000, () => {
//   console.log(`Server listening at http://localhost:${8000}`);
// })
