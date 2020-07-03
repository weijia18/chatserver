var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
/*app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
});*/

server=require('http').createServer(app)
io=require('socket.io').listen(server)

io.sockets.on('connection',(socket) =>{
  socket.on('chat',(data) => {
    Idtoid.findOne({
        username: data.to_user
    }).then((rs) => {
        io.to(rs.socketid).emit('receiveMsg',{
            from_user:data.from_user,
            message:data.message,
            time:data.time,
            avater:data.avater,
            _id:data._id
        })
    })
  })
})


app.listen(3002)

module.exports = app;
