// Day 21 - 3. addPropertyAndValue
// addPropertyAndValue
// 문제
// 객체와 키, 값을 입력받아 키에 값을 할당해야 합니다.

// 입력
// 인자 1 : obj
// 임의의 속성을 갖는 객체
// 인자 2 : property
// string 타입의 키
// 인자 3 : value
// 기본 자료형(Primitive type)
// number, string 등
// 출력
// 별도의 리턴문(return statement)을 작성하지 않습니다.
// 주의 사항
// 이미 정의된 속성에 해당하는 키 값을 입력받은 경우, 입력받은 값을 덮어씁니다.


function addPropertyAndValue(obj, property, value) {
    obj[property] = value;
    return;
    // TODO: 여기에 코드를 작성합니다.
  }

  


  Reference

  function addPropertyAndValue(obj, property, value) {
    obj[property] = value;
  }
  