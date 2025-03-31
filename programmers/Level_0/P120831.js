// P120831: 짝수의 합
function solution(n) {
  let result = 0;
  while (n > 0) {
    if (n % 2 == 0) result += n;
    n--;
  }

  return result;
}

console.log(solution(10));
