var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var twitter = require('./route/twitter');

app.use(express.static('./client'));
app.set('port', process.env.PORT || 8080);

var bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({extended: true, limit: '25mb'}))
// app.use(bodyParser.json({limit: '25mb', extended: true}))


app.use('/api/twitter/', twitter);

app.listen(app.get('port'), function () {
  console.log('Listening on port.. ' + app.get('port'));
})