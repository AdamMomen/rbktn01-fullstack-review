const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  conseol.log('connected!')
});

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  ownerID: Number,
});


let Repo = mongoose.model('Repo', repoSchema);

// recieving an object of data
let save = (/* TODO */) => {




  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;