// Day 18 - 2. getLastElement
// getLastElement
// 문제
// 배열를 입력받아 배열의 마지막 요소를 리턴해야 합니다.

// 입력
// 인자 1 : arr
// 임의의 요소를 갖는 배열
// 출력
// 배열의 요소를 리턴해야 합니다.
// 주의 사항
// 빈 배열을 입력받은 경우, undefined를 리턴해야 합니다.

function getLastElement(arr) {
    if(arr === ""){
      return "undefined";
    }
    else {
      return arr[arr.length-1];
    }
  }


Reference

function getLastElement(arr) {
if (arr.length > 0) {
    return arr[arr.length - 1];
}
return undefined;
}
