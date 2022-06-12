// Day 18 - 1. getType
// getType
// 문제
// 임의의 값을 입력받아 타입을 리턴해야 합니다.

// 입력
// 인자 1 : anything
// 임의의 값
// 출력
// string 타입을 리턴해야 합니다.
// 1
// ex) 'string', 'number', 'boolean', 'object', 'array', 'undefined', 'null', 'function'


function getType(anything) {
    if (typeof anything === 'array' || typeof anything === 'object'){
      if(Array.isArray(anything) === true){
        return 'array';
      }
      else{
        return 'object';
      }
    }
    else{
      return typeof anything;
    }
  } // TODO: 여기에 코드를 작성합니다.



Reference
function getType(anything) {
if (Array.isArray(anything)) {
    return 'array';
} else if (anything === null) {
    return 'null';
} else {
    return typeof anything;
}
}
