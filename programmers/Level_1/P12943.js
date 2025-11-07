// P12943: 콜라츠 추측
const collatz = (num, count) => {
  if (count > 500) return -1;
  if (num == 1) return count;

  count += 1;
  if (num % 2 == 0) {
    const evenNum = num / 2;

    return collatz(evenNum, count);
  } else {
    const oddNum = num * 3 + 1;

    return collatz(oddNum, count);
  }
};

function solution(num) {
  if (num == 1) return 0;

  const count = 0;
  return collatz(num, count);
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));

/**
 * 주어진 수가 1이 될 때까지 다음 작업을 반복하면 모든 수를 1로 만들 수 있다는 추측.
 * 추측 1. 입력된 수가 짝수라면 2로 나눈다.
 * 추측 2. 입력된 수가 홀수라면 3을 곱하고 1을 더한다.
 * 추측 3. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복한다.
 * 단, 주어진 수가 1이라면 0을, 작업을 500번 반복할 때까지 1이 되지 않는다면 -1을 반환.
 *
 * - 주어진 수가 1이라면 0을 반환한다.
 * - 입력된 수가 짝수라면 2로 나눈다.
 * - 입력된 수가 홀수라면 3을 곱하고 1을 더한다.
 * - 1이될 때까지 반복한다.
 * - 500번 이상 반복하면 -1을 반환한다.
 *
 * 재귀함수..는 너무 오래 걸리려나
 */

/**
 * 재귀함수로 한 번에 풀었고 중간에 콘솔도 확인안하고 머리로만 했는데도 성공해서 기분이 좋다!
 * 다른 사람 풀이를 봤는데 그냥 while문으로 풀기도 했다.
 * 고려를 안했던건 아닌데 확실히 재귀보다는 while이 코드 해석도 쉽고 나은것 같다.
 */
