var express = require('express');
var app = express();

app.get('/', function(req, res) {
  console.log('GET request received');
  res.send('Hello Wolrd!');
});

app.use(function(req, res, next) {
  res.status(404).send('Sorry I cannot find it');
});

app.listen(3000);