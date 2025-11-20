// P12931: 자릿수 더하기

function solution(n) {
  // 1. 숫자 그대로 풀기
  // const splitNum = [];
  // while (n > 0) {
  //   splitNum.push(n % 10);
  //   n = Math.floor(n / 10);
  // }

  // return splitNum.reduce((acc, cur) => acc + cur, 0);

  // 2. 문자열로 바꿔서 풀기
  const splitNum = String(n).split("");
  return splitNum.reduce((acc, cur) => acc + +cur, 0);
}

console.log(solution(123));

/**
 * 1. 문자열로 바꿔서 풀면 금방 풀겠지만 숫자 자체로 자릿수마다 출력하는거 도전!
 * const splitNum = [];
 * while (n > 0) {
 *   splitNum.push(n % 10);
 *   n = Math.floor(n / 10);
 * }
 */

/**
 * 2. 문자열로 쉽게 푸는 방법
 * const splitNum = String(n).split("");
 * return splitNum.reduce((acc, cur) => acc + +cur, 0);
 *
 * => 이때 문자열로 바꾸는게 String(n)도 되지만, n+""으로 간단하게도 가능하다.
 */

/**
 * gpt의 평가로는 두 방식이 큰 차이는 없다. 그러나 실무나 코테 풀이에서는 2번이 좋지만, 알고리즘 학습이나 면접용 풀이에서는 1번이 낫다.
 */
