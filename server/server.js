var express = require('express');
var app = express();
var twitter = require('./route/twitter');

app.use(express.static('./client'));
app.set('port', process.env.PORT || 8080);

app.use('/api/twitter/', twitter);

app.listen(app.get('port'), function () {
  console.log('Listening on port ' + app.get('port') + '...');
})