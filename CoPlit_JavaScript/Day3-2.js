// Day03 - 2.isGreaterThan30
// isGreaterThan30

// 문제
// 온도를 입력받아 해당 온도가 30이 넘는지 확인 후 알맞은 값을 리턴해야 합니다.

// 입력
// 인자 1 : temp
// number 타입의 온도
// 출력
// string 타입을 리턴해야 합니다.
// 온도가 30 미만일 때 : '여름이 매우 덥네요'
// 온도가 30 이상일 때 : '에어컨을 켜야겠다!'

// function isGreaterThan30(temp) {
//   if(temp<30){
//     return '여름이 매우 덥네요';
//   } else if(temp>=30){
//     return '에어컨을 켜야겠다!';
//   }
//   // TODO: 여기에 코드를 작성합니다.
// }

function isGreaterThan30(temp){
    if(temp<30){return `여름이 매우 덥네요`}
    else {return `에어컨을 켜야겠다!`}
  }