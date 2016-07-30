var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');

var Twitter = require('../helper/twitter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

router.get('/', function (req, res) {
  console.log(req)
  Twitter.getTweets(req.query.screen_name)
    .then(function(data) {
      res.send(data);
    })
    .catch(function() {
      res.json({
        success: false
      })
    });
});

module.exports = router;