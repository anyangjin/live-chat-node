
//node express 객체를 참조한다. 
var express = require('express');

//express객체내의 Router()메소드를 호출해서 사용자 요청과 응답을 처리해주는 라우투터 객체를 생성한다.
var router = express.Router();


/* 
- 메인 웹페이지  요청 라우팅 메소드 
- 요청방식: Get방식(웹브라우저에서 주소를 호출하는 방식과 동일하게 서버에서도 받아준다.) 
- 호출주소: http://localhost:3000
- 응답결과 : /veiews\index.ejs 뷰파일의 HTML 페이지 내용을 브라우저에 전달한다. 
*/
router.get('/', function(req, res, next) {

  //HTTPResponse객체의 render메소드 호출('뷰파일경로지정',뷰에 전달할 JSON데이터)
  res.render('index.ejs', { title: 'Express',userName:"강창훈",age:10 });
});






//router.get('호출라우팅주소정의',시용자요청을 처리해주는 응답 콜백함수(웹브라우저에서 전달되는 각종정보(httprequest객체),서버 응답결과로 서버에서 웹브라우저로 전달되는 정보(httpResponse객체,미들웨어..)));

/* 
- 샘플 웹페이지 요청 라우팅 메소드 
- 요청방식: Get방식(웹브라우저에서 주소를 호출하는 방식과 동일하게 서버에서도 받아준다.) 
- 호출주소: http://localhost:3000/sample
- 응답결과 : /veiews/sample.ejs 뷰파일의 HTML 페이지 내용을 브라우저에 전달한다. 
*/
router.get('/sample',function(req,res,next){

  //서버에서 웹브라우저 클라이언트에게 views\sample.ejs 뷰파일안에 있는 html소스를 HTTPResonse객체를 통해 전달한다. 
  //res = HTTPResponse객체이고 이객체는 서버에서 각종정보를 웹브라우저로 전달할수 있는 다양한 메소드를 제공한다. 
  //res.render('뷰파일=ejs 경로 지정',뷰에전달할 json데이터,.....);
  res.render('sample.ejs');
});





//index.js 라우터 모듈기능중에 router객체를 외부로 제공해줘야한다. 
module.exports = router;


