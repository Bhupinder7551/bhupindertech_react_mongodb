const DB = require('./db');
const express = require('express');
var cors = require('cors') 
DB();
const port = 5000;
const app = express();

app.use(cors())
app.use(express.json());

//Available routes
app.use('/api',require('./routes/blogs_route'))

app.use('/api/auth', require ('./routes/auth'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
