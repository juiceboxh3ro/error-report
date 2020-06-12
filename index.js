require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000

app.use(cors());
app.use(express.json())

if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")))
}

app.use('/api', require('./api-router'))

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});

app.get('/', (req, res) => {
  res.send('This is the backend.')
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"))
})

process.on('uncaughtException', (err) => {
  console.error((new Date).toUTCString() + ' uncaughtException:', err.message);
  console.error(err.stack)
  process.exit(1)
})