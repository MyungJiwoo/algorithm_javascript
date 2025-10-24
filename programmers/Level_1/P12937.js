// P12937: 짝수와 홀수

function solution(num) {
  return num % 2 == 0 ? "Even" : "Odd";
}

console.log(solution(3));

/**
 * 정수 num이 짝수라면 "Even"을, 홀수라면 "Odd"를 반환
 */

/**
 * 다른 사람의 풀이를 보니 0이 falsy라는 것을 이용했다. (num % 2 ? "Odd" : "Even")
 * 간과하기 좋은 부분이구만
 */
