// Day08 - 2.findMinLengthOfThreeWords
// findMinLengthOfThreeWords
// 문제
// 세 개의 단어를 입력받아 그 중 가장 짧은 단어의 길이를 리턴해야 합니다.

// 입력
// 인자 1 : word1
// string 타입의 문자열
// word1.length는 20 이하
// 인자 2 : word2
// string 타입의 문자열
// word2.length는 20 이하
// 인자 3 : word3
// string 타입의 문자열
// word3.length는 20 이하
// 출력
// number 타입을 리턴해야 합니다.
// 주의 사항
// 단어들의 길이가 모두 같은 경우, 그 길이를 리턴해야 합니다.

function findMinLengthOfThreeWords(word1, word2, word3) {
    const a = word1.length;
    const b = word2.length;
    const c = word3.length;
  
    if(a<b && a<c){return a}
    else if(b<a && b<c){return b}
    else if(c<a && c<b){return c}
    else {return a}
  }


// function findMinLengthOfThreeWords(word1, word2, word3) {
//   let a =word1.length;
//   let b =word2.length;
//   let c =word3.length;// TODO: 여기에 코드를 작성합니다.
//   if (a<b && a<c){
//     return a;
//   } else if (b<a && b<c){
//     return b;
//   } else return c;

//}

Reference
function findMinLengthOfThreeWords(word1, word2, word3) {
    let shortestLen = word1.length;
  
    // 첫 번 째 글자가 2번째 글자보다 길 때
    if (word1.length > word2.length) {
      shortestLen = word2.length;
      // word 2 랑 word 3을 비교
      if (word2.length > word3.length) {
        shortestLen = word3.length;
      }
    } else {
      // word1 과 word3 을 비교
      if (word1.length > word3.length) {
        shortestLen = word3.length;
      }
    }
    return shortestLen;
  }
  