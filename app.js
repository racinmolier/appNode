var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var contactoRouter = require('./routes/contacto');
var areaRouter = require('./routes/area');
var procesoRouter = require('./routes/proceso');
var personalRouter = require('./routes/personal');
var pendienteRouter = require('./routes/pendiente');
var unidadRouter = require('./routes/unidad');
var fareaRouter = require('./routes/farea');
var funidadRouter = require('./routes/funidad');
var fpendienteRouter = require('./routes/fpendiente');
var fprocesoRouter = require('./routes/fproceso');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/contacto', contactoRouter);
app.use('/area', areaRouter);
app.use('/pendiente', pendienteRouter);
app.use('/unidad', unidadRouter);
app.use('/proceso', procesoRouter);
app.use('/personal', personalRouter);
app.use('/farea', fareaRouter);
app.use('/funidad', funidadRouter);
app.use('/fproceso', fprocesoRouter);
app.use('/fpendiente', fpendienteRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
