// Day07 - 1.findShortestOfThreeWords

// findShortestOfThreeWords
// 문제
// 차례대로 문자열 3개를 입력받아, 가장 짧은 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : word1
// string 타입의 문자열
// word1.length는 10 이하
// 인자 2 : word2
// string 타입의 문자열
// word2.length는 10 이하
// 인자 3 : word3
// string 타입의 문자열
// word3.length는 10 이하
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 동일한 길이의 문자열 중에서는 처음 입력받은 문자열을 리턴해야 합니다.

function findShortestOfThreeWords(word1, word2, word3) {
    const a = word1.length;
    const b = word2.length;
    const c = word3.length;
    
    if (a<b && a<c){return word1}
    else if(b<a && b<c){return word2} 
    else if(c<a && c<b){return word3}
    else {return word1}
  }

  

Reference
function findShortestOfThreeWords(word1, word2, word3) {
    let shortestWord = word1;
  
    // 첫 번 째 글자가 2번째 글자보다 길 때
    if (word1.length > word2.length) {
      shortestWord = word2;
      // word 2 랑 word 3을 비교
      if (word2.length > word3.length) {
        shortestWord = word3;
      }
    } else {
      // word1 과 word3 을 비교
      if (word1.length > word3.length) {
        shortestWord = word3;
      }
    }
    return shortestWord;
  }