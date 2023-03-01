

const {odd,even} = require('./var.js');
const checkOddOrEven = require('./function');

function checkStringOddOrEven(str){
    if(str.length % 2){
        return odd;
    }else{
        return even;
    }
}


console.log("function.js모듈의 내장함수 checkOddOrEven(10) 출력",checkOddOrEven(10));

console.log("checkStringOddOrEven('문자열 데이터 ')문자열의 길이를 체크하는 함수 실행:",checkStringOddOrEven("abcde"));