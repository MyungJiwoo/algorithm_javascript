// P181935: 홀짝에 따라 다른 값 반환하기
function solution(n) {
  let answer = 0;

  while (n > 0) {
    if (n % 2 === 0) answer += n ** 2;
    else answer += n;
    n -= 2;
  }

  return answer;
}

// n이 짝수면 n이하의 짝수의 제곱의 합을 더하고, n이 홀수면 n이하의 홀수만 더하고

console.log(solution(10));
