// Day 18 - 3. computeSumOfAllElements
// computeSumOfAllElements
// 문제
// 배열을 입력받아 배열의 모든 요소의 합을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// number 타입을 요소로 갖는 배열
// 출력
// number 타입을 리턴해야 합니다.
// 주의 사항
// 입력받은 배열이 빈 배열인 경우, 0을 리턴해야 합니다.
// 1
// 2
// let output = computeSumOfAllElements([1, 2, 3]);
// console.log(output); // --> 6

function computeSumOfAllElements(arr) {
    let sum = 0;
    for(let i = 0; i< arr.length; i++){
    sum += arr[i];
    }
    return sum;
    }
    // TODO: 여기에 코드를 작성합니다.

Reference
function computeSumOfAllElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  