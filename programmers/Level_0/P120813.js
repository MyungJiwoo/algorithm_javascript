// P120813: 짝수는 싫어요
function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i += 2) {
    answer.push(i);
  }
  return answer;
}

console.log(solution(10));

/**
 * n 이하의 홀수가 오름차순으로 담긴 배열을 리턴
 * -> 원래라면 while이나 for로 했을텐데 map이랑 filter의 조합으로도 되려나
 * -> 일단 나는 i+=2로 바로 홀수를 구했는데 다른 풀이를 보니 Array.from()으로 배열을 만들어서 풀기도 한다.
 * ```
 * Array
 *   .from({ length: n }, (_, i) => i + 1)
 *   .filter(i => i % 2 !== 0)
 * ```
 */
