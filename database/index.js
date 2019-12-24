const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  owner_login: String,
  owner_ID: Number,
  forks_count: Number,
  html_url: String,
});


let Repo = mongoose.model('Repo', repoSchema);
var save = (objOfData, callback) => {

  Repo.create({
    id: objOfData.id,
    name: objOfData.name,
    owner_login: objOfData.owner.login,
    owner_ID: objOfData.owner.id,
    forks_count: objOfData.forks_count,
    html_url: objOfData.html_url,
  })
    .then(result => {
      console.log('repo saved successfully! ', result)
      callback(result)
    })
}

var find = (query = {}, callback) => {
  Repo.find(query).limit(25)
    //this is for sorting
    //.sort(-1)
    .then(result => {
      callback(null, result)
    });
}
module.exports.save = save;
module.exports.find = find;
