// Day16 - 3.characterAndNumber [Advanced]
// characterAndNumber
// 문제
// 문자열을 입력받아 각 문자(letter) 뒤에 해당 문자의 인덱스가 추가된 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : word
// string 타입의 단어
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(for)문을 사용해야 합니다.
// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.

function characterAndNumber(word) {

    let can = ''
    for ( i=0; i < word.length; i++ ) {
       can = can + word[i] + i
    } 
    return can;
  }  // TODO: 여기에 코드를 작성합니다.


Reference
function characterAndNumber(word) {
    let result = '';
    for (let i = 0; i < word.length; i++) {
      result = result + word[i] + i;
    }
    return result;
  }
  