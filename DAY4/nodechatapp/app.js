var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//뷰 레이아웃 구성을 위한 express-ejs-layouts 패키지를 참조합니다.
var expressLayouts = require("express-ejs-layouts");

//시퀄라이즈 DB 참조
var sequelize = require("./models/index.js").sequelize;

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

//개발자 정의 라우터 파일 참조
var memberRouter = require("./routes/member");
var channelRouter = require("./routes/channel");

var app = express();

//mysql과 자동연결처리 및 모델기반 물리 테이블 생성처리제공
sequelize.sync();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//모든 뷰파일(.ejs)에적용될 기본 layout ejs파일을 지정한다.
app.set("layout", "chatLayout.ejs");
app.set("layout extractScripts", true);
app.set("layout extractStyles", true);
app.set("layout extractMetas", true);

//노드 어플리케이션에 레이아웃 기능을 적용합니다.
app.use(expressLayouts);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

//개발자 정의 라우터파일들의 기본 호출주소체계 구성
app.use("/member", memberRouter);
app.use("/chat", channelRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
