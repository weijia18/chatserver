var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ejs = require('ejs')

var app = express();



app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.engine('html', ejs.__express)


app.use('/', usersRouter)


app.listen(3002, () => {
    console.log('Server Running at http://localhost:3002 ')
})

module.exports = app;
