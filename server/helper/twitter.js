var Twitter = require('twitter');
require('dotenv').config();

var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

var twitter = {};

twitter.getTweets = function (screenName) {
  var params = {screen_name: screenName, count: 25};
  return new Promise(function (resolve, reject) {
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
      if (error) {
        reject(error);
      } else {
        resolve(tweets);
      }
    })
  })
};

// twitter.getUser = function (screenName) {
//   var params = {screen_name: screenName};
//   return new Promise(function (resolve, reject) {
//     client.get('users/lookup', params, function (error, response) {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(response);
//       }
//     })
//   })
// }

module.exports = twitter;