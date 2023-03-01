//socket.io 팩키지 참조
const SocketIO = require("socket.io");

//socket.js모듈 기능정의
module.exports = (server) => {
  //express서버와 socket.io객체 연결
  const io = SocketIO(server, { path: "/socket.io" });

  //socket.io connection 이벤트 정의 추가
  //웹브라우저와 웹서버(express)간 소켓통신 연결이 완료되면 발생하는 connection 이벤트 기능정의
  //웹브라우저와 웹서버가 연결된상태 발생하는 모든 기능을 콜백함수안에서 구현한다.
  io.on("connection", (socket) => {
    //브라우저에서 호출되는 서버측 기능1
    //기능이름은 임으로적으로 정의하며 해당 기능이 호출될때 콜백함수가 실행된다.
    //콜백함수가 호출될떄 브라우저에서 전달한 값을 파라메터로 수신받는다.
    socket.on("broadcast", function (msg) {
      //브라우저에서 전송된 msg데이터를 현재 연결된 모든 사용자 브라우저에게 전송한다.
      //receiveAll은 브라우저에서 서버로부터 전송된 메시지를 받을 기능명이다.
      io.emit("receiveAll", msg);

      //socket.broadcast.emit("receive",msg);
    });
  });
};
