
//var.js 모듈을 참조한다.(var.js에 정의된 속성및 기능을 사용하기 위해 )
const {odd,even,test} = require('./var.js');


//전달되는 매개변수(파라메터)값이 홀수인지 짝수인지 체크 후에 문자열로 값을 반환한다.
function checkOddOrEven(num){
    //자바스크립트 연산자 /는 나누기 %는 특정값으로 나눈후 반환되는 결과값...
    // if구문에서 true = 1 false =0 하게 사용됩니다. 
    if(num%2){
        //나눈결과값이 0인경우는 여기부분이 실행되지 않고 1인경우만 아래부분이 실행된다..
        return odd;
    }

    return even;
}

//객체로 export하지 않고 직접 단일함수 하나만 외부로 노출한다. 
module.exports = checkOddOrEven;



