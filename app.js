'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

module.exports = app; // for testing
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/travel');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("connected!!");
});

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});
