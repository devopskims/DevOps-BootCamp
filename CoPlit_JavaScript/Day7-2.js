// Day07 - 2.isOddLength
// isOddLength
// 문제
// 문자열을 입력받아 그 길이가 홀수인지 여부를 리턴해야 합니다.

// 입력
// 인자 1 : word
// string 타입의 문자열
// word.length는 10 이하
// 출력
// boolean 타입을 리턴해야 합니다.
// 주의 사항
// 0은 짝수로 간주합니다.

function isOddLength(word) {
  if(word.length %2 ===0){return false}
  else {return true}
}

// function isOddLength(word) {
//   return word.length %2 !== 0;// TODO: 여기에 코드를 작성합니다.
// }


Reference
function isOddLength(word) {
  if (word.length % 2 !== 0) {
    return true;
  }
  return false;
}

