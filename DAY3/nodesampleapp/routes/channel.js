var express = require('express');
var router = express.Router();

//모든 채널정보 조회 페이지 요청 라우팅메소드
router.get('/list',async(req,res)=>{
    res.render('channel/list.ejs');
});



//채널정보등록 페이지 요청 라우팅메소드
router.get('/create',async(req,res)=>{
    res.render('channel/create');
});

//채널정보 등록 처리 라우팅 메소드
router.post('/create',async(req,res)=>{
    
    res.redirect('/channel/list');
});


//특정 채널정보 삭제 처리 라우팅 메소드
//localhost:3000/channel/delete?cid=1
router.get('/delete',async(req,res)=>{
    
    res.redirect('/channel/list');
});



//와일드 카드 라우팅메소드는 맨 하단으로 위치시킬것..
//채널정보 확인 및 수정 페이지 요청 라우팅 메소드
router.get('/modify/:cid',async(req,res)=>{
    res.render('channel/modify',{});
});

//와일드 카드 라우팅메소드는 맨 하단으로 위치시킬것..
//수정된 채널정보 처리 라우팅 메소드 
router.post('/modify/:cid',async(req,res)=>{
    res.redirect('/channel/list');
});


module.exports = router;