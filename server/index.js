const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db.js');

app.use(cors());
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());
app.use(express.static('./public'));

app.get('/entries/:user', (req, res) => {
  let user = req.url.slice(9, req.url.length);
  return db.get(user)
    .then((data) => {
      res.status(200).send(data);
    })
})

app.post('/entries', (req, res) => {
  return db.insert(req.body)
    .then(() => {
      res.status(200).send();
    })
})

const PORT = 8080;

app.listen(PORT);
console.log(`Server listening at port ${PORT}`)