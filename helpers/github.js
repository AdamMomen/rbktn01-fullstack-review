const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  // var username = 'AdamMomen';
  let options = {
    url: `https://api.github.com/users/${username}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`,
      'Content-Type': 'application/vnd.github+json',
    }
  };
  request.get(options, (err, response, body) => {

    if (err) { callback(err, null) }

    console.log('statusCode ', response.statusCode)
    console.log('body ', JSON.parse(body))
    callback(null, body);
  });
}
module.exports.getReposByUsername = getReposByUsername;