var express = require("express");
var router = express.Router();

var db = require("../models/index");

/*
-회원 가입 웹페이지 요청 라우팅 메소드
-요청방식: get방식(링크나 직접url주소를 입력해 호출하는경우)
-요청주소형식: http://localhost:3000/member/entry
-응답결과: 회원가입 뷰파일내용(html/css....)
*/
router.get("/entry", async (req, res, next) => {
  res.render("member/entry.ejs", { layout: "memberLayout.ejs" });
});

//주요정보: 라우팅 메소드를 정의할떄는 기본원칙이 있어요.
//반드시 라우팅메소드들이 (요청방식+ URL호출주소) 가 중복되면 안됩니다.

/*
-회원 가입 정보를 처리하는 라우팅 메소드
-요청방식: post방식(form태그의 method=post)
-요청주소형식: http://localhost:3000/member/entry
-응답결과: 회원가입 뷰파일내용(html/css....)
*/
router.post("/entry", async (req, res, next) => {
  //1 사용자 입력폼에서 정보를 추출한다.

  var email = req.body.email;
  var password = req.body.password;

  //2. Db저장 json 데이터 객체정의

  // var newMemberData = await db.Member.create();

  //STEP1:폼에서 전달된 데이터를 수집해서 DB 회원테이블에 데이터를 등록처리한다.

  var member = {
    email,
    memeber_password: password,
    name: "",
    profile_img_path: "/",
    entry_type_code: 0,
    use_state_code: 1,
    reg_date: Date.now(),
    reg_member_id: 0,
  };

  // db.Member.create() 메소드가 호출되면 실제 db테이블에 데이터를 저장하고 저장된 회원정보를 결과값으로 다시 반환해준다.
  var newMemberData = await db.Member.create(member);

  // db.Member.create() 메소드는 ORM프레임 워크에 의해
  //INSERT INTO member(이메일 이름 등 속성들이 쫘악 들어간다.)Value('eddy@test.co.kr','1234','/img/user12.png',0,1,20203-02-23 16:40:10,0); 쿼리로 변환되어 DB서버에 전달되어 실행되고 결과를 반환 한다.

  //
  //STEP2: 사용자 웹브라우저를 하기 특정URL(로그인url) 로 이동시킨다.
  res.redirect("/login");
});

module.exports = router;
