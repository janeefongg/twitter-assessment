var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');

var Twitter = require('../helper/twitter');



app.use(bodyParser.json());

router.get('/', function (req, res) {
  Twitter.test();
});

module.exports = router;