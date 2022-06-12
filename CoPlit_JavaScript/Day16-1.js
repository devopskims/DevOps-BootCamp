// Day16 - 1.makeOddDigits
// makeOddDigits
// 문제
// 수(num)를 입력받아 1을 포함하여 num개의 홀수로 구성된 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 정수 (num >= 1)
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(while)문을 사용해야 합니다.
// 숫자(number string) 사이의 구분은 없습니다. ('13579')


function makeOddDigits(num) {
    let md = '';
    let count = 0;
    let i = 1;
  
    while (count < num) {
      md = md + String(i);
      i = i + 2;
      count = count +1
    }
  
    return md;
  }   // TODO: 여기에 코드를 작성합니다.








Reference
function makeOddDigits(num) {
    let result = '';
  
    let count = 0;
    let i = 1;
    while (count < num) {
      result = result + String(i);
      i = i + 2;
      count++;
    }
  
    return result;
  }

  