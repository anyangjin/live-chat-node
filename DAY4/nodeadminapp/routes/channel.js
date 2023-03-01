var express = require("express");
var router = express.Router();

//모든 채널정보 조회 페이지 요청 라우팅메소드
router.get("/list", async (req, res) => {
  const list = [
    {
      channel_id: 1,
      community_id: 2,
      category_code: 22,
      channel_name_varchar: "학습소통채널",
      user_limit: 200,
      channel_img_path: 200,
      channel_desc: "학습 중 자유롭게 소통하는 채널",
      channel_state_code: 1,
      reg_date: "2022-01-16",
      reg_member_id: 2,
      edit_date: "2023-02-16",
      edit_member_id: 200,
    },
    {
      channel_id: 2,
      community_id: 2,
      category_code: 22,
      channel_name_varchar: "코딩실습채널",
      user_limit: 200,
      channel_img_path: 200,
      channel_desc: "코딩 실습 정보를 공유하는 채널",
      channel_state_code: 0,
      reg_date: "2022-12-16",
      reg_member_id: 2,
      edit_date: "2023-02-16",
      edit_member_id: 200,
    },
  ];
  res.render("channel/list.ejs", { channels: list });
});

//채널정보등록 페이지 요청 라우팅메소드
router.get("/create", async (req, res) => {
  res.render("channel/create");
});

//채널정보 등록 처리 라우팅 메소드
router.post("/create", async (req, res) => {
  res.redirect("/channel/list");
});

//특정 채널정보 삭제 처리 라우팅 메소드
//localhost:3000/channel/delete?cid=1
router.get("/delete", async (req, res) => {
  // res.redirect('test.co.kr/도메인을 포함하거나 포함하지 않은 하위 url주소를 넣어주세요 /channel/list /로 반드시 시작합니다.')
  res.redirect("/channel/list");
});

/*
-화면뷰 재사용 기법(Include) 실습 샘플 웹페이지 호출 라우팅 메소드
-요청방식: get
-호출주소: http://localhost:3000/channel/test/sample
*/
router.get("/test/sample", async (req, res) => {
  //인클루드 기술이 적용된 샘플 뷰 반환
  // res.render('뷰파일의 경로를 지정하되 /channel 이런게 하지마세요.')
  res.render("channel/sample");
});

router.get("/test/sample2", async (req, res) => {
  //인클루드 기술이 적용된 샘플 뷰 반환
  // res.render('뷰파일의 경로를 지정하되 /channel 이런게 하지마세요.')
  res.render("channel/sample2");
});

//와일드 카드 라우팅메소드는 맨 하단으로 위치시킬것..
//채널정보 확인 및 수정 페이지 요청 라우팅 메소드
router.get("/modify/:cid", async (req, res) => {
  res.render("channel/modify", {});
});

//와일드 카드 라우팅메소드는 맨 하단으로 위치시킬것..
//수정된 채널정보 처리 라우팅 메소드
router.post("/modify/:cid", async (req, res) => {
  res.redirect("/channel/list");
});

module.exports = router;
