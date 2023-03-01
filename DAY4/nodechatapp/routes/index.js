//routes/index.js 기본제공 라우터 파일 기능정의

var express = require("express");
var router = express.Router();

/* 
메인페이지 요청 라우팅 메소드
http://localhost:3000/

*/
router.get("/", async (req, res, next) => {
  res.render("index");
});

/* 
로그인 웹페이지 요청 라우팅 메소드
http://localhost:3000/login
응답결과: 로그인 View파일 내용 전달
*/
router.get("/login", async (req, res, next) => {
  res.render("member/login", { layout: "memberLayout.ejs" });
});

/* 
로그인 사용자 입력정보기반 로그인 처리 라우팅 메소드
http://localhost:3000/login
응답결과: 정상적으로 로그인시 메인페이지 이동/ 실패시 다시 로그인 페이지로 이동
*/
router.post("/login", async (req, res, next) => {
  //로그인 후 메인url로 웹브라우저를 이동시켜준다.
  res.redirect("/");
});

//샘플 단순 웹채팅 페이지 호출하기
router.get("/sample/chat", function (req, res) {
  res.render("simplechat.ejs", { layout: "blankLayout.ejs" });
});

router.get("/sample/groupchat", function (req, res) {
  res.render("groupchat.ejs");
});

module.exports = router;
