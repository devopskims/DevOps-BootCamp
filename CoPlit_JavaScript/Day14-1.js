// Day14 - 1.makeDigits
// makeDigits
// 문제
// 수(num)를 입력받아 1부터 num까지의 정수로 구성된 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 정수 (num >= 1)
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(for)문을 사용해야 합니다.
// 숫자(number string) 사이의 구분은 없습니다. ('1234567')


function makeDigits(num) {
    let a = "";
    for(let i=1;i<=num;i++)
    a= a+String(i)
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
function makeDigits(num) {
    let result = '';
  
    for (let i = 1; i <= num; i++) {
      result = result + String(i);
    }
  
    return result;
  }
  