// P77884: 약수의 개수와 덧셈
function check(num) {
  if (num == 1) return -1;

  const set = new Set();
  for (let i = 1; i <= num / 2; i++) {
    if (num % i == 0) {
      set.add(num / i);
      set.add(i);
    }
  }
  return set.size % 2 == 0 ? num : -num;
}

function solution(left, right) {
  let result = 0;
  for (let i = left; i <= right; i++) {
    result += check(i);
  }

  return result;
}

console.log(solution(1, 2));

/**
 * 약수의 개수가 짝수인 수는 더하고, 홀수인 수는 뺀 수를 return
 */

/**
 * 아직도 약수는 구할 수 있는데 그 방법이 매끄럽지 않다.
 * 다른 사람 문제 풀이를 보니, "제곱근이 정수면 약수의 개수가 홀수다"를 적용해서 간단하게 풀었다.
 * => Number.isInteger(Math.sqrt(num))
 */
