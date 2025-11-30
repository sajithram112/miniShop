const express = require('express');
require('dotenv').config();
const app = express();
const db = require("./dbConnect.js")
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});