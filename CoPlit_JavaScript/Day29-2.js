// Day 29 - 2. isOdd
// isOdd
// 문제
// 수를 입력받아 홀수인지 여부를 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 정수
// 출력
// boolean 타입을 리턴해야 합니다.
// 주의 사항
// 함수 isOdd는 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 나눗셈(/), 나머지(%) 연산자 사용은 금지됩니다.
// 0은 짝수로 간주합니다.






function isOdd(num) {
    if(num === 0){
      return false;
    } else if(num === 1){
      return true;
    } 
    
  }
  
  // TODO: 여기에 코드를 작성합니다.











  Reference
  function isOdd(num) {
    if (num === 0) {
      return false;
    } else if (num === 1) {
      return true;
    }
  
    if (num < 0) {
      return isOdd(-num);
    }
    return isOdd(num - 2);
  }
  