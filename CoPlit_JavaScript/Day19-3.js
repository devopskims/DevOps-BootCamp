// Day 19 - 3. addToFront
// addToFront
// 문제
// 배열과 요소를 입력받아 주어진 요소를 배열의 맨 앞에 추가하고 해당 배열을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// 임의의 요소를 갖는 배열
// 인자 2 : el
// 임의의 타입
// 출력
// 기존 배열에 주어진 요소가 추가된 형태의 배열을 리턴해야 합니다.
// [el, arr[0], arr[1], ..., arr[n-1]]
// arr.length는 n


function addToFront(arr, el) {
    arr.unshift(el);
   return arr;
 
 }// TODO: 여기에 코드를 작성합니다.





Reference
function addToFront(arr, el) {
arr.unshift(el);
return arr;
}
