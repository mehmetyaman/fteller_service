var express = require('express');
//, mongooseProvider = require('./public/javascripts/mongoose-main').MongooseProvider

var app = express();

var path = require('path');

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
//var employees = require('./routes/employees');
var route_predictions = require('./routes/predictions');
var route_categories = require('./routes/categories');

//app.module('myModule', ['ui.bootstrap']);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
//app.use('/employees', employees);
app.use('/predictions', route_predictions);
app.use('/categories', route_categories);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


// Database
//var mongo = require('mongodb');
var dbOptions= {
  'auto_reconnect': true
  , 'poolSize' : 1
  , w : 1
  , safe : true
  , strict: false
};


//var mongo = require('/usr/local/lib/node_modules/mongodb', dbOptions);
//var monk = require('monk', {safe: true}, {strict: false} );

//var db = monk('localhost:27017/node-mongo-employee');

// Make our db accessible to our router
app.use(function(req,res,next){
  req.db = db;
  next();
});

module.exports = app;
