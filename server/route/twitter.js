var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');

var Twitter = require('../helper/twitter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

router.get('/', function (req, res) {
  Twitter.test(req.query.screen_name)
    .then(function(data) {
      res.send(data);
    })
});

module.exports = router;