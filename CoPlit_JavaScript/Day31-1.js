// Day 31 - 1. findMatryoshka
// findMatryoshka
// 문제
// 러시아 전통인형 마트료시카에 대한 정보를 담은 객체와 수를 입력받아 조건에 맞는 인형이 있는지 여부를 리턴해야 합니다.

// 입력
// 인자 1 : matryoshka
// 'matryoshka', 'size' 속성을 갖는 재귀적으로 정의된 객체 (입출력 예시 참고)
// matryoshka.matryoshka는 null 또는 matryoshka 객체
// matryoshka.size는 중첩될수록 작아집니다.
// 인자 2 : size
// number 타입의 수
// 출력
// boolean 타입을 리턴해야 합니다.
// 주의 사항
// 함수 findMatryoshka는 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 입력받은 객체는 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
// 빈 객체를 입력받은 경우, false를 리턴해야 합니다.




function arrProduct(arr) {
    if(arr.length == 0){
      return 1;
    }
    let add = arr.slice(1, arr.length);
    return arr[0]*arrProduct(add);
  }
  // TODO: 여기에 코드를 작성합니다.











  Reference
  function findMatryoshka(matryoshka, size) {
    // recursive case
    if (matryoshka.size === size) {
      return true;
    } else if (matryoshka.matryoshka && matryoshka.size > size) {
      return findMatryoshka(matryoshka.matryoshka, size);
    }
  
    // base case
    return false;
  }
  