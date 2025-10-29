// P12934: 정수 제곱근 판별

function solution(n) {
  const x = Math.sqrt(n);
  return x % 1 == 0 ? (x + 1) ** 2 : -1;
}

console.log(solution(121));
console.log(solution(3));

/**
 * 뜻하지 않게 return의 삼항연산자 조건부에서 실수해서 오래 걸렸다.
 * 코드를 천천히 잘 생각하자.
 */
