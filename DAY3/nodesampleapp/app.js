var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//회원정보 요청응답처리 라우터 파일 참조 
var memberRouter = require('./routes/member');

//회원정보 관리 RESTful API 전용 라우터 파일 참조
var memberAPIRouter = require('./routes/member-api.js');

//채널정보 요청응답처리 라우터 파일 참조 
var channelRouter = require('./routes/channel');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//각종 라우터 파일의 기본 URL주소경로 정의하기 
app.use('/', indexRouter);
app.use('/users', usersRouter);


//회원정보 요청응답 라우터파일의 기본 URL주소 정의하기 
//http://localhost:3000/member
app.use('/member', memberRouter);

//회원정보 처리 전용 RESTful API 라우터의 기본 URL주소 정의 
//http://localhost:3000/api/member
app.use('/api/member', memberAPIRouter);

//채널정보 처리 웹페이지 라우터의 기본 URL주소 정의 
//http://localhost:3000/channel
app.use('/channel', channelRouter);


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
