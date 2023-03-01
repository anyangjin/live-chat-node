var express = require('express');
var router = express.Router();

/* 
-메인 페이지 요청 라우팅 메소드 
-요청방식: GET
-요청주소: http://localhost:3000/
*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;



