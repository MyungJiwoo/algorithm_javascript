// P181901: 배열 만들기 1
function solution(n, k) {
  let i = 1;
  const answer = [];
  while (i <= n) {
    if (i % k == 0) answer.push(i);
    i += 1;
  }
  return answer;
}

console.log(solution(10, 3));
