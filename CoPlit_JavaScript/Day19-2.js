// Day 19 - 2. getLongestWord
// getLongestWord
// 문제
// 문자열을 입력받아 문자열에서 가장 긴 단어를 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 공백이 있는 알파벳 문자열
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 단어는 공백 한 칸으로 구분합니다.
// 가장 긴 단어가 2개 이상이면 첫번째로 등장하는 단어를 리턴해야 합니다.


function getLongestWord(str) {
    let longword = str.split(' ');
    let start= longword[0]
  
    for (let i =1; i <longword.length; i++) {
      if (longword[i].length > start.length) {
        start = longword[i]
      }
    }
    return start;
  }
  // TODO: 여기에 코드를 작성합니다.




Reference
function getLongestWord(str) {
let words = str.split(' ');

let max = words[0];
for (let word of words) {
    if (word.length > max.length) {
    max = word;
    }
}

return max;
}


