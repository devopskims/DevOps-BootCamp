// Day 31 - 2. unpackGiftbox
// unpackGiftbox
// 문제
// 선물 상자에 대한 정보를 담은 배열과 문자열을 입력받아 조건에 맞는 선물이 있는지 여부를 리턴해야 합니다.

// 입력
// 인자 1 : giftBox
// 문자열, 배열을 요소로 갖는 재귀적으로 정의된 배열 (입출력 예시 참고)
// 문자열은 선물 상자에 들어있는 각 선물의 이름을 의미합니다.
// 배열은 더 작은 선물 상자를 의미합니다.
// 인자 2 : wish
// string 타입의 문자열
// 출력
// boolean 타입을 리턴해야 합니다.
// 주의 사항
// 함수 unpackGiftbox는 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용이 가능합니다.
// 입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
// 빈 배열 또는 빈 문자열을 입력받은 경우, false를 리턴해야 합니다.




function unpackGiftbox(giftBox, wish) {
    if(giftBox.length == 0 || wish == ""){
      return false;
    }
    // TODO: 여기에 코드를 작성합니다.
  }

  
















  


  Reference
  function unpackGiftbox(giftBox, wish) {
    // recursive case
    for (let i = 0; i < giftBox.length; i++) {
      if (giftBox[i] === wish) {
        return true;
      } else if (Array.isArray(giftBox[i])) {
        const result = unpackGiftbox(giftBox[i], wish);
        if (result === true) {
          return true;
        }
      }
    }
  
    // base case
    return false;
  }
  
//   다른 풀이 방법 1
  function unpackGiftbox(giftBox, wish) {
    // recursive case
    let anotherBoxes = [];
    for (let i = 0; i < giftBox.length; i++) {
      if (giftBox[i] === wish) {
        return true;
      } else if (Array.isArray(giftBox[i])) {
        anotherBoxes = anotherBoxes.concat(giftBox[i]);
      }
    }
  
    if (anotherBoxes.length > 0) {
      return unpackGiftbox(anotherBoxes, wish);
    }
  
    // base case
    return false;
  }
  
//   다른 풀이 방법 2
  function unpackGiftbox(giftBox, wish) {
    const result = giftBox.reduce((acc, curr) => {
      if (curr === wish) {
        return true;
      } else if (Array.isArray(curr)) {
        return unpackGiftbox(curr, wish) || acc;
      } else {
        return acc;
      }
    }, false);
    return result;
  }
  