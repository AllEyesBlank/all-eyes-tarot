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

app.put('/user', (req, res) => {
  return db.verify(req.body.user, req.body.pass)
    .then((bool) => {
      if (bool) {
        res.status(200).send('verified')
      } else {
        res.status(200).send('no user found')
      }
    })
})

app.post('/user', (req, res) => {
  return db.userInUse(req.body.user)
    .then((bool) => {
      if (bool === false) {
        return db.create(req.body.user, req.body.pass)
          .then(() => {
            res.status(200).send('new user created')
          })
      } else {
        res.status(200).send('username in use');
      }
    })
})

app.post('/entries', (req, res) => {
  return db.insert(req.body)
    .then(() => {
      res.status(200).send();
    })
})

app.delete('/entries', (req, res) => {
  return db.delete(req.body.createdAt)
    .then(() => {
      res.status(200).send();
    })
})
const PORT = 8080;

app.listen(PORT);
console.log(`Server listening at port ${PORT}`)