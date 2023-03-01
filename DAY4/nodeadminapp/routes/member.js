//회원정보 관리 웹페이지에 대한 응답과 요청처리 라우터 파일

var express = require("express");
var router = express.Router();

//db관리 orm db객체 생성
var db = require("../models/index");

//자바스크립트 날짜 포맷
//
var moment = require("moment");

/*
-회원 가입 페이지 요청 라우팅 메소드 구현
-요청방식: get
-호출주소: http://localhost:3000/member/entry
*/
router.get("/entry", function (req, res) {
  res.render("member/entry.ejs");
});

/*
-회원 가입 정보 처리  라우팅 메소드 구현
-요청방식: post
-호출주소: http://localhost:3000/member/entry
*/
router.post("/entry", async (req, res) => {
  //사용자가 폼에 입력한 데이터를 추출해보자.
  //form태그내의 입력요소의 name속성값으로 폼요소의 입력값을 추출한다.
  //req.body.폼요소의 html태그의 name속성값
  var email = req.body.email;
  var member_password = req.body.password;
  var name = req.body.name;
  var telephone = req.body.telephone;

  //DB에 등록저장할 회원정보 JSON데이터 객체 생성

  //중요!! db에 저장된 객체의 속석명과 해당모델(members.js의 속성명)과 동일해야한다.
  var member = {
    email: email,
    // member_password,
    // name,
    // telephone,
  };

  //orm을 이용해 db에 members 테이블 신규 사용자 정보를 등록한다.

  var registedMemberData = await db.Member.create(member);

  //위에 db.Member.create()orm 문법이 오른쪽 sql구문으로 변환되어 db서버로 넘어가 실행된다.
  //위에 Insert into members(email)values('메일주소');를 대체 한것

  //DB에 회원테이블에 member 데이터 등록처리 후 사용자 웹브라우저 페이지를 메인 페이지로 이동시킴
  res.redirect("/member/list");
});

/*
-회원 로그인 페이지 요청 라우팅 메소드 구현
-요청방식: get
-호출주소: http://localhost:3000/member/login
*/
router.get("/login", function (req, res) {
  //뷰를 호출할떄 특정 레이아웃 페이지가 적용되게 호출한다.
  //기본 레이아웃 ejs 페이지가 아닌 loginLayout.ejs 레이아웃 파일이 적용되게 처리함.
  res.render("member/login.ejs", { layout: "loginLayout.ejs" });
});

//회원목록 조회 페이지 요청 라우팅메소드
//http://localhost:3000/member/list
router.get("/list", async (req, res) => {
  //db에서 전체회원 목록을 조회한다.

  //   var members = [
  //     {
  //       member_id: 1,
  //       email: "eddy@test.co.kr",
  //       member_password: "1345",
  //       name: "강창훈",
  //       telephone: "010-2760-5246",
  //       use_state_code: 1, //0:대기상태 1:가입완료 2:탈퇴처리된상태
  //       entry_type_code: 1, //0:직접가입 1:페이스북 SNS가입
  //     },
  //     {
  //       member_id: 2,
  //       email: "test@test.co.kr",
  //       member_password: "2222",
  //       name: "강현서",
  //       telephone: "010-2222-5246",
  //       use_state_code: 2, //0:대기상태 1:가입완료 2:탈퇴처리된상태
  //       entry_type_code: 0, //0:직접가입 1:페이스북 SNS가입
  //     },
  //     {
  //       member_id: 3,
  //       email: "kms@test.co.kr",
  //       member_password: "333",
  //       name: "강민서",
  //       telephone: "010-3333-5246",
  //       use_state_code: 0, //0:대기상태 1:가입완료 2:탈퇴처리된상태
  //       entry_type_code: 1, //0:직접가입 1:페이스북 SNS가입
  //     },
  //   ];

  //db에서 members 테이블의 모든 데이터 목록을 조회해온다

  var members = await db.Member.findAll();
  // db.Member.findAll(); = SELECT * FROM members; SQL쿼리로 변환되어 DB서버로 전달되어 실행되고 결과가 반환된다.

  //db에서 조회한 전체 회원목록 데이터를 뷰에 전달한다.
  res.render("member/list.ejs", { members: members, moment });
});

//회원정보 조회 처리 라우팅메소드
//요청유형:post
//http://localhost:3000/member/list
router.post("/list", function (req, res) {
  //사용자가 입력한 조회옵션 정보를 추출한다.
  var searchEmail = req.body.email;
  var searchMemberName = req.body.name;
  var searchTelephone = req.body.telephone;

  //수집된 사용자가 입력한 조회필터정보를 이용해 db에서 회원 목록을 조회한다.

  //DB에서 조회된 회원목록정보
  var members = [
    {
      member_id: 1,
      email: "eddy@test.co.kr",
      member_password: "1345",
      name: "강창훈",
      telephone: "010-2760-5246",
      use_state_code: 1, //0:대기상태 1:가입완료 2:탈퇴처리된상태
      entry_type_code: 1, //0:직접가입 1:페이스북 SNS가입
    },
    {
      member_id: 2,
      email: "test@test.co.kr",
      member_password: "2222",
      name: "강현서",
      telephone: "010-2222-5246",
      use_state_code: 2, //0:대기상태 1:가입완료 2:탈퇴처리된상태
      entry_type_code: 0, //0:직접가입 1:페이스북 SNS가입
    },
    {
      member_id: 3,
      email: "kms@test.co.kr",
      member_password: "333",
      name: "강민서",
      telephone: "010-3333-5246",
      use_state_code: 0, //0:대기상태 1:가입완료 2:탈퇴처리된상태
      entry_type_code: 1, //0:직접가입 1:페이스북 SNS가입
    },
  ];

  //db에서 조회한 전체 회원목록 데이터를 뷰에 전달한다.
  res.render("member/list.ejs", { members });
});

//회원정보 확인 및 수정 페이지 요청 라우팅메소드
//회원고유번호를 쿼리스트링방식으로 전달해오면 해당번호를 추출해 DB에서 해당 단일 회원의 정보를 조회해온다.
//localhost:3000/member/modify?mid=1&test=sample
router.get("/modify", async (req, res) => {
  //STEP1: 쿼리스트링방식(URL주소?key1=value1&key2=value2&.....)으로 전달된 키들의 값들을 req.query.키명을 추출한다.
  var memberId = req.query.mid;
  var testData = req.query.test;

  //STEP2: DB에서 전달된 회원고유번호에 해당하는 단일회원정보를 조회해온다.
  var member = await db.Member.findOne({ where: { member_id: memberId } });

  // db.Member.findOne() orm 문법은 오른쪽 sql 구문으로 SELECT * FROM members WHERE member_id=1; 변환되어 db서버에 전송되고 실행

  //STEP3: 조회된 단일 회원정보가 아래라고 가정하고..
  //   var member = {
  //     member_id: 1,
  //     email: "eddy@test.co.kr",
  //     member_password: "1345",
  //     name: "강창훈",
  //     telephone: "010-2760-5246",
  //     use_state_code: 1, //0:대기상태 1:가입완료 2:탈퇴처리된상태
  //     entry_type_code: 0, //0:직접가입 1:페이스북 SNS가입
  //   };

  //STEP4:단일 회원JSON데이터를 뷰파일에 전달한다.
  res.render("member/modify.ejs", { member: member });
});

//회원정보 삭제처리 라우팅메소드
//localhost:3000/member/delete?mid=1
router.get("/delete", async (req, res) => {
  //step1: 삭제하려는 회원고유번호 추출
  var memberId = req.query.mid;

  //step2: 회원고유번호로 DB의 해당 회원정보 데이터를 삭제한다.

  var deletedCnt = await db.Member.destroy({
    where: { member_id: memberId },
  });
  //db.Member.destroy() orm문법은 DELETE FROM members WHERE member_id=1; sql 쿼리로 변경되어 db서버에 전달되어 실행되고
  //삭제된 건수가

  //step3: 회원정보가 삭제되었으니 회원목록 페이지로 이동시킨다.(수정페이지로 이동불가)
  res.redirect("/member/list");
});

//회원정보 확인 및 수정 페이지 요청 라우팅메소드
//회원고유번호를 파라메터방식으로 전달해오면 해당번호를 추출해 DB에서 해당 단일 회원의 정보를 조회해온다.
//localhost:3000/member/modify/1
router.get("/modify/:mid", function (req, res) {
  //STEP1:URL파라메터 방식으로 전달된 값의 추출은 와일드카드(:id)를 선언하고 req.params.와일드카드키명 으로 값을 추출한다.
  var memberId = req.params.mid;

  //STEP2: 해당 회원고유번호로 DB에서 단일 사용자 정보를 조회해온다.

  //SEP3: 아래는 DB에서 가져온 단일 사용자 정보라고 가정한다.
  var member = {
    member_id: 1,
    email: "eddy@test.co.kr",
    member_password: "1345",
    name: "강창훈",
    telephone: "010-2760-5246",
    use_state_code: 1, //0:대기상태 1:가입완료 2:탈퇴처리된상태
    entry_type_code: 0, //0:직접가입 1:페이스북 SNS가입
  };

  //STEP4:조회된 단일사용자 정보를 수정페이지 뷰에 전달해 수정하려는 사용자정보가 포함된 웹페이지를 브라우저에 전달한다.
  res.render("member/modify.ejs", { member });
});

//회원정보  수정 처리 라우팅 메소드
//localhost:3000/member/modify/1
router.post("/modify/:id", async (req, res) => {
  //STEP0:수정하려는 사용자 고유번호를 추출한다.
  var member_id = req.params.id;

  //STEP1)사용자가 폼에 입력한 수정 데이터를 추출해보자.
  //form태그내의 입력요소의 name속성값으로 폼요소의 입력값을 추출한다.
  //req.body.폼요소의 html태그의 name속성값
  var email = req.body.email;
  var member_password = req.body.password;
  var name = req.body.name;
  var telephone = req.body.telephone;

  //STEP3:DB에 등록저장할 회원정보 JSON데이터 객체 생성

  //db에 members 라는 테이블에 수정하고자 하는 컬럼명과 화면에서 전달받은 데이터로 모델속성에 값을 할당한다.
  var member = {
    email,
    // member_password,
    // name,
    // telephone,
  };

  //STEP4:DB에 ORM을 통해 해당 고유번호 단일 사용자 정보를 수정처리한다.

  var updatedCnt = await db.Member.update(member, {
    where: { member_id: member_id },
  });

  //db.Member.update() orm문법이 update members SET email='test@test.co.kr' WHERE member_id =1; SQL구문으로 변환되어 DB서버에 실행되고
  //수정 적용된 건수가 반환된다.

  //STEP5: 수정적용 완료후 회원목록 페이지로 이동시킨다.
  res.redirect("/member/list");
});

module.exports = router;
