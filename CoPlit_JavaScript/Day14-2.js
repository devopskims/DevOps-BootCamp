// Day14 - 2.countCharacter [Advanced]
// countCharacter
// 문제
// 문자열과 문자를 입력받아 문자열에서 문자(letter)가 등장하는 횟수를 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 문자열
// 인자 2 : letter
// string 타입의 문자
// letter.length는 1
// 출력
// number 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(for)문을 사용해야 합니다.
// 빈 문자열을 입력받은 경우, 0을 리턴해야 합니다.

function countCharacter(str, letter) {
    let a = 0
    for(let i=0;i<=0;i++)
    a= a+ str
    return a 
  }
  

  
  
  // function makeDigits(num) {
  //   let result = '';
  
  //   for (let i = 1; i <= num; i++) {
  //     result = result + String(i);
  //   }
  
  //   return result;
  // }








Reference
function countCharacter(str, letter) {
    let counter = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === letter) {
        counter = counter + 1;
      }
    }
  
    return counter;
  }
  