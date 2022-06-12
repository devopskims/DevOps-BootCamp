// Day 20 - 3. createPhoneNumber
// createPhoneNumber
// 문제
// 0-9 사이의 정수를 요소로 갖는 배열을 입력받아 전화번호 형식의 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// number 타입을 요소로 갖는 배열
// arr[i]는 0 이상 9 이하의 정수
// 배열의 길이는 8 또는 11
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// 배열의 길이가 8인 경우, 앞에 [0, 1, 0]이 있다고 가정합니다.

function createPhoneNumber(arr) {
    let letter = "";
    return letter;
  } 
    let format = "(xxx)xxxx-xxxx";
  
  // TODO: 여기에 코드를 작성합니다.
  

  




Reference

function createPhoneNumber(arr) {
let head = '(010)';
const len = arr.length;
const body = arr.slice(len - 8, len - 4).join('');
const tail = arr.slice(len - 4, len).join('');

if (len === 11) {
    head = `(${arr.slice(0, 3).join('')})`;
}

return `${head}${body}-${tail}`;
}
