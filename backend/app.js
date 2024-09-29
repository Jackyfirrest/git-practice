require('dotenv').config();  // 讀取 .env 檔案中的變數

const express = require('express');
const app = express();
//const port = 3000;
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})