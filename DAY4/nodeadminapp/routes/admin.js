var express = require("express");
var router = express.Router();

router.get("/entry", function (req, res) {
  res.render("admin/entry.ejs");
});

router.get("/list", async (req, res) => {
  const admin_members = [
    {
      admin_member_id: 1,
      admin_name: "안양진",
      admin_id: "jjiny",
      email: "jjiny_10_19@kakao.com",
      telephone: "010-3234-0155",
      used_yn_code: 1,
      reg_date: "2023-02-19",
    },
    {
      admin_member_id: 2,
      admin_name: "liam An",
      admin_id: "liam An",
      email: "liam_An@kakao.com",
      telephone: "010-1234-5678",
      used_yn_code: 0,
      reg_date: "2023-12-19",
    },
  ];

  res.render("admin/list.ejs", { admin_members });
});

router.post("/entry", async (req, res) => {
  const admin_members = {
    admin_member_id: 3,
    admin_name: req.body.name,
    admin_password: req.body.password,
    admin_id: req.body.id,
    email: req.body.email,
    telephone: req.body.telephone,
    used_yn_code: Number(req.body.entrystate),
    reg_date: req.body.date,
  };

  console.log(admin_members);
  res.redirect("list", 200, { admin_members });
});

router.get("/modify", function (req, res) {
  adminId = req.query.aid;
  console.log(adminId);

  const admin = {
    admin_member_id: 1,
    admin_name: "안양진",
    admin_id: "jjiny",
    email: "jjiny_10_19@kakao.com",
    telephone: "010-3234-0155",
    used_yn_code: 1,
    reg_date: "2023-02-19",
  };
  res.render("admin/modify.ejs", { admin });
});

router.get("/delete", function (req, res) {
  //step1: 삭제하려는 회원고유번호 추출
  var adminId = req.query.aid;
  console.log(adminId);
  //step2: 회원고유번호로 DB의 해당 회원정보 데이터를 삭제한다.

  //step3: 회원정보가 삭제되었으니 관리자목록 페이지로 이동시킨다.(수정페이지로 이동불가)
  res.redirect("/admin/list");
});

module.exports = router;
