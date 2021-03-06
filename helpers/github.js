const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {

  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`,
      'Content-Type': 'application/vnd.github+json',
    }
  };

  request.get(options, (err, response, body) => {
    if (err) { callback(err, null) }
    console.log('statusCode ', response.statusCode)
    callback(null, JSON.parse(body));
  });
}
module.exports.getReposByUsername = getReposByUsername;