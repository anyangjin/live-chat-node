
//회원정보 관리 웹페이지에 대한 응답과 요청처리 라우터 파일 

var express = require('express');
var router = express.Router();




/*
-회원 가입 페이지 요청 라우팅 메소드 구현
-요청방식: get
-호출주소: http://localhost:3000/member/entry
*/
router.get('/entry',function(req,res){
    res.render('member/entry.ejs');
});


/*
-회원 가입 정보 처리  라우팅 메소드 구현
-요청방식: post
-호출주소: http://localhost:3000/member/entry
*/
router.post('/entry',function(req,res){

    //사용자가 폼에 입력한 데이터를 추출해보자.
    //form태그내의 입력요소의 name속성값으로 폼요소의 입력값을 추출한다.
    //req.body.폼요소의 html태그의 name속성값
    var email = req.body.email;
    var member_password = req.body.member_password;
    var name = req.body.name;
    var telephone = req.body.telephone;

    //DB에 등록저장할 회원정보 JSON데이터 객체 생성 
    var member ={
        email:email,
        member_password,
        name,
        telephone
    };

    //DB에 회원테이블에 member 데이터 등록처리 후 사용자 웹브라우저 페이지를 메인 페이지로 이동시킴
    res.redirect('/');
    //res.redirect('/login');
});








/*
-회원 로그인 페이지 요청 라우팅 메소드 구현
-요청방식: get
-호출주소: http://localhost:3000/member/login
*/
router.get('/login',function(req,res){
    res.render('member/login.ejs');
});





module.exports = router;