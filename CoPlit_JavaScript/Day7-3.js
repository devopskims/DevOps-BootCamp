// Day07 - 3.computeDifference [Advanced]
// computeDifference
// 문제
// 두 수를 입력받아 두 수의 차이를 나타내는 메세지를 리턴해야 합니다.

// 입력
// 인자 1 : num1
// number 타입의 정수 (num1 >= 0)
// 인자 2 : num2
// number 타입의 정수 (num2 >= 0)
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 문자열 간 덧셈 연산은 금지됩니다.
// Template string(template literal)을 사용해 풀어야 합니다.
// 점수 간 차이는 절대값(absolute)을 사용합니다.


function computeDifference(num1, num2) {
    return `${num1}, ${num2}의 차이는 ${Math.abs(num1-num2)}입니다.` 
   }
   
   
   
   //'3, 7의 차이는 4입니다.'
   
      
   
   
   
   
   // function computeDifference(num1, num2) {
   //   return `${num1}, ${num2}의 차이는 ${Math.abs(num1-num2)}입니다.`
   // }
   
   

Reference
function computeDifference(num1, num2) {
    return `${num1}, ${num2}의 차이는 ${Math.abs(num1 - num2)}입니다.`;
  }
  