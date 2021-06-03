const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const filePath = path.join(__dirname, '../client/public');
const serveStatic = express.static(filePath);

app.use(serveStatic);

app.get('https://app-hrsei-api.herokuapp.com/api/fec2/hrsfo/reviews/', (req, res) => {
  res.send('Hello World!');
})

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
})