// Day 17 - 2. makePermutations
// makePermutations
// 문제
// 문자열을 입력받아 해당 문자열에 등장하는 각 문자(letter)를 가지고 만들 수 있는 길이 2의 문자열들을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 문자열
// 출력
// string 타입을 리턴해야 합니다.
// 입력받은 문자열의 각 문자를 0, 1, 2, ..., n이라고 할 경우, 00,01,02,...,nn 형식으로 리턴해야 합니다.
// 주의 사항
// 이중 반복문(double for loop)을 사용해야 합니다.
// 빈 문자열을 입력받은 경우에는 빈 문자열을 리턴해야 합니다.

function makePermutations(str) {
    let letter = "";
    if(str.length ===0){
      return "";
    }
    for(let i=0; i<str.length; i++){  
      for(let j=0; j<str.length;j++){
        letter = letter + `${str[i]}${str[j]},`
        
      }
    }
    letter = letter.slice(0,letter.length-1)
    return letter;
  }
  // TODO: 여기에 코드를 작성합니다.


  Reference
  function makePermutations(str) {
    let result = '';
    for (let left = 0; left < str.length; left++) {
      for (let right = 0; right < str.length; right++) {
        result = result + `${str[left]}${str[right]},`;
      }
    }
  
    return result.slice(0, result.length - 1);
  }

  
  