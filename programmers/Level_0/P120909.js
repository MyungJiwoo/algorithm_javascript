// P120909: 제곱수 판별하기

function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}

console.log(solution(144));

// Math.sqrt()는 인자에 루트를 씌운다. 이때 정수형이어야 제곱수이기 때문에 Number.isInteger로 판별했다.
