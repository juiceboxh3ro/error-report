require('dotenv').config();
const express = require('express');
const cors = require('cors');
const apiRouter = require('./api-router')

const app = express();

app.use(cors());
app.use(express.json())
app.use('/api', apiRouter)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});

app.get('/', function (req, res) {
  res.send('This is the backend.')
})

process.on('uncaughtException', (err) => {
  console.error((new Date).toUTCString() + ' uncaughtException:', err.message);
  console.error(err.stack)
  process.exit(1)
})