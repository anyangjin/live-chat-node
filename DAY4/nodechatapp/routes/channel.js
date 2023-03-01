var express = require('express');
var router = express.Router();

/* 
채팅 웹 페이지 요청 라우팅 메소드 
http://localhost:3000/chat/
*/
router.get('/', function(req, res, next) {
  res.render('channel/chat.ejs');
});


module.exports = router;