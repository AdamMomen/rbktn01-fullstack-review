const express = require('express');
const bodyParser = require('body-parser')
const API = require('../helpers/github.js')
const DB = require('../database/index.js')

let app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/../client/dist'));

//POST requst HERE
app.post('/repos', function (req, res) {
  let username = req.body.username;
  DB.find({ owner_login: username }, (err, result) => {
    if (err) { throw err }
    if (result.length === 0) {
      API.getReposByUsername(req.body.username, (err, data) => {
        if (err) { throw err }
        data.forEach(repo => {
          DB.save(repo, (error, result) => {
            if (error) { throw error }
          })
        })
      })
    }
  })
  res.end('All data saved!')
})


//GET requst HERE
app.get('/repos', function (req, res) {

  DB.find(null, (err, result) => {
    if (err) {
      res.status(404).end();
      throw err;
    }

    res.json(result).end('All data sent!');
  })
});

let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

