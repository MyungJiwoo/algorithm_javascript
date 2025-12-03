// P181839: 주사위 게임 1
const isOdd = (num) => num % 2 == 1;

function solution(a, b) {
  if (isOdd(a) && isOdd(b)) return a ** 2 + b ** 2;
  else if (isOdd(a) || isOdd(b)) return 2 * (a + b);
  else return Math.abs(a - b);
}

console.log(solution(3, 5));

/**
 * a, b가 모두 홀수라면 a**2 + b**2
 * a, b 중 하나만 홀수라면 2 * (a + b)
 * a, b 모두 홀수가 아니라면 | a - b |
 */
