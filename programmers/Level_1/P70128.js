// P70128: 내적
function solution(a, b) {
  return a.reduce((acc, cur) => acc + cur * b.shift(), 0);
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));

/**
 * 내적 : 두 벡터의 곱을 하는 연산
 * 두 정수 바열의 내적을 구해서 반환해라
 *
 * - 자릿수별로 곱을 더하고 모두 합산해서 반환한다.
 */

/**
 * 합산이라자마자 reduce를 떠올렸고, 결국 두 배열에서 같은 인덱스끼리 구하는거라 reduce 가능할거라 판단했다.
 * reduce의 3번째 인자인 index를 쓰려고 하다가 shift()를 써서 풀었다.
 * 다른 사람의 풀이를 보면 index만을 써서 풀었다. `a.reduce((acc, _, i) => acc += a[i] * b[i], 0);`
 */
