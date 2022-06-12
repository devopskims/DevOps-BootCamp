// Day 24 - 3. mostFrequentCharacter
// mostFrequentCharacter
// 문제
// 문자열을 입력받아 가장 많이 반복되는 문자(letter)를 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 공백이 있는 문장
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 띄어쓰기는 제외합니다.
// 가장 많이 반복되는 문자가 다수일 경우, 가장 먼저 해당 횟수에 도달한 문자를 리턴해야 합니다.
// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.





function mostFrequentCharacter(str) {
    if(str === "")
    return ""
  }
  // TODO: 여기에 코드를 작성합니다.














  Reference
  function mostFrequentCharacter(str) {
    let obj = { mostCount: 0, mostFrequent: '' };
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ') {
        continue;
      }
  
      if (obj[str[i]] === undefined) {
        obj[str[i]] = 0;
      }
      obj[str[i]] += 1;
  
      if (obj[str[i]] > obj['mostCount']) {
        obj['mostCount'] = obj[str[i]];
        obj['mostFrequent'] = str[i];
      }
    }
    return obj['mostFrequent'];
  }
  