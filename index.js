const express = require('express');
const app = express();
require('dotenv').config()
const path = require('path');


const PORT = process.env.PORT;

const clientPath = path.join(__dirname, 'frontend', 'dist');
app.use(express.static(clientPath));

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});