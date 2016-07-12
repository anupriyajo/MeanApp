var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

/******************************************************movie code starts*******************************************************/
//var mongoose   = require('mongoose');
/******************************************************movie code ends*******************************************************/

var routes = require('./routes/index');
var users = require('./routes/users');

/******************************************************movie code starts*******************************************************/
var movies = require('./routes/movies');
/******************************************************movie code ends*******************************************************/
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/******************************************************movie code starts*******************************************************/
 app.use('/', express.static(path.join(__dirname, 'react')));
 /******************************************************movie code ends*******************************************************/
app.use('/', routes);
app.use('/users', users);

/******************************************************movie code starts*******************************************************/
app.use('/movies',movies)
//mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o');
/******************************************************movie code ends*******************************************************/


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


module.exports = app;
