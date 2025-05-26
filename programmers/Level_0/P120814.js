// P120814: 피자 나눠 먹기(1)

function solution(n) {
  return Math.ceil(n / 7);
}

console.log(solution(7));

// 올림(Math.ceil)해서 모두가 한 조각 이상의 피자를 먹을 수 있도록 피자의 수를 구한다.
