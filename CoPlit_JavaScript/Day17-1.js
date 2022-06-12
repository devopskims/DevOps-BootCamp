// Day 17 - 1. listPrimes
// listPrimes
// 문제
// 2 이상의 자연수를 입력받아 2부터 해당 수까지의 소수(prime number)들을 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 정수 (num >= 2)
// 출력
// string 타입을 리턴해야 합니다.
// 2-3-5-7의 형식으로 리턴해야 합니다.
// 주의 사항
// 이중 반복문(double for loop)을 사용해야 합니다.

function listPrimes(num) {
    let first = '2'
    for(let i = 3; i <= num; i+=2){
      let forI = true;
      for(let j = 2; j < i; j++){
          if(i%j === 0){
          forI = false;
          break;     
          }
       }
        if(forI === true){
        first = `${first}-${i}`;
      }  
    }
    return first
  }



Reference
function listPrimes(num) {
    let result = '2';
    for (let candi = 3; candi <= num; candi += 2) {
      let isPrime = true;
      let sqrt = parseInt(Math.sqrt(candi));
      for (let divider = 3; divider <= sqrt; divider += 2) {
        if (candi % divider === 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime) {
        result = `${result}-${candi}`;
      }
    }
  
    return result;
  }
