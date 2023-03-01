//회원정보 데이터 관리 요청과 응답 전용 RESTful API 라우터 파일 
var express = require('express');
var router = express.Router();





//신규 회원 정보 등록 처리 RESTfaul API 라우팅 메소드
//호출방식: post
//호출주소: http://localhost:3000/api/member/entry
//반환값: 신규 등록된 단일회원정보 json데이터
router.post('/entry',function(req,res){

    //프론트엔드에서 신규회원 JSON데이터를 전송해오면 
    //JSON데이터에서 회원정보를 추출한다.
    //req.body.클라이언트에서 전송되는 JSON객체의 속성명으로 값을 추출한다. 
    var email = req.body.email;
    var password = req.body.password;
    var name = req.body.name;
    var telephone = req.body.telephone;

    //DB에 저장할 회원정보 JSON데이터 객체 정의 
    var member= {
        member_id:1,
        email,
        member_password:password,
        name,
        telephone
    };

    //DB에 회원정보를 등록처리한다.

    //등록된 데이터 결과를 다시 브라우저로 반환한다.
    res.json(member);
});



//모든 회원정보 조회 RESTfUL API 라우팅 메소드
//호출방식: get
//호출주소: http://localhost:3000/api/member/all
//반환값: 전체 회원 목록 JSON 배열 값 
router.get('/all',function(req,res){

    //DB에서 모든 회원정보를 조회한다.

    //조회결과로 회원JSON의 배열목록이 생성되고  해당 배열을 브라우저로 전달한다.
    var members = [
        {
            member_id:1,
            email:"eddy@test.co.kr",
            member_password:"1345",
            name:"강창훈",
            telephone:"010-2760-5246"
        },
        {
            member_id:2,
            email:"test@test.co.kr",
            member_password:"2222",
            name:"강현서",
            telephone:"010-2222-5246"
        },
        {
            member_id:3,
            email:"kms@test.co.kr",
            member_password:"333",
            name:"강민서",
            telephone:"010-3333-5246"
        }
    ];

    res.json(members);
});



//중요:와일드카드가 적용된 라우팅 메소드는 항상 라우터 파일의 최하단에  위치해야합니다.
//중요:왜냐면 같은 호출타입과 같은호출 URL형식이 아래에 라우팅메소드가 있으면 하단 라우팅메소드가 호출되지 않음...
//단일 회원정보 조회 RESTful API 라우팅 메소드 
//호출 방식 : get
//호출 주소: http://localhost:3000/api/member/1
//반환값: 회원번호 1번 회원에 대한 단일 회원정보 JSON 데이터 반환
router.get('/:id',function(req,res,next){

    //http://localhost:3000/api/member/1 URL내에 포함된 1이라는 회원고유번호(URL파라메터)를 추출할떄는
    //req.params.파라메터 와일드 카드 키명 
    //url내 파라메터의 값을 추출하기 위해 라우팅메소드 주소안에/:id라는 와일드카드 키명을 설정해고 
    //해당 키명으로 url에 포함된 값 member/1이란 값을 추출한다. 
    var memberId = req.params.id;

    console.log("URL주소내에 포함된 회원고유번호 추출정보:",memberId);

    //DB에서 해당 회원번호에 대한 정보를 조회한다.

    var member ={
        member_id:1,
        email:"eddy@test.co.kr",
        member_password:"1345",
        name:"강창훈",
        telephone:"010-2760-5246"
    };

    //서버에서 웹브라우저로 json  순수 데이터 를 전달한다.
    //res.json(전달하려는 JSON 데이터);
    res.json(member);
});

module.exports = router;