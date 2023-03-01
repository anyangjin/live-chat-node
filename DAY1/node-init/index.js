// 설치된 moment,dotenv 팩키지를 참조한다.
const moment = require('moment');
const env = require('dotenv');

//환경설정파일에 대한 기본구성작업 실행..
env.config();

//현재 일시정보를 터미널창에 출력한다.
console.log("현재 날짜시간정보를 출력합니다:",Date.now());

//moment 오픈소스 노드 팩키지를 이용한 날짜/시간 포맷을 내가 원하는 포맷으로 출력하기
console.log("일시 포맷을 지정해 출력해주세요",moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'));


//환경설정파일 .env파일에 설정된 키를 기준으로 세팅된 값을 불러온다.
var configValue = process.env.UPLOAD_PATH;
console.log("업로드 파일 저장 기본서버 경로:",configValue);





