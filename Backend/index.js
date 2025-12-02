const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors')
const user_routes = require('./routes/user')
const PORT = process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors({ origin: '*' }))

// routes register
app.use('/user', user_routes)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});