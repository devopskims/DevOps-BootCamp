// Day 19 - 1. getLargestElement
// getLargestElement
// 문제
// 배열을 입력받아 가장 큰 요소를 리턴해야 합니다.

// 입력
// 인자 1 : arr
// number 타입의 정수로 구성된 배열
// 출력
// number 타입을 리턴해야 합니다.


function getLargestElement(arr) {
    let Num = arr[0];
    for(let el of arr){
      if(el > Num){
        Num = el
      }
    } return Num;
  }
  // TODO: 여기에 코드를 작성합니다.





Reference
function getLargestElement(arr) {
// javascript의 다양한 반복문 문법(syntax)을 검색해 봅니다. (`mdn for in` 또는 `mdn for of`)
let max = arr[0];
for (let el of arr) {
    if (el > max) {
    max = el;
    }
}
return max;
}
  



