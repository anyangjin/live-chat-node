
const odd = "홀수입니다.";
const even ="짝수입니다.";

function test(){
    //<==여기 콘솔은 노드 프레임워크 내의 console내장객체의 콘솔객체이구요.
    console.log("테스트 함수가 호출되었습니다."); 

    //html페이지내의 <script>console.log("웹브라우저 개발자도구 콘솔탭에 로그 기록을 출력할떄")</script>
    //요거는 클라이언트 스크립트( 90년대부터 사용됨 ..노드는 2009서버에서 실행되는 자바스크립트 런타임환경 노드 출시된 노드는 별개의것...)
}

//모듈내의 기능과 속성을 외부에서 사용할수 있게 ()로 노출한다.
module.exports = {
    odd,
    even,
    test
}













