// P181930: 주사위 게임 2

function solution(a, b, c) {
  const abcSet = new Set([a, b, c]);

  if (abcSet.size == 3) return a + b + c;
  else if (abcSet.size == 2)
    return (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
  else
    return (
      (a + b + c) *
      (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)) *
      (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3))
    );
}

console.log(solution(2, 6, 1));
console.log(solution(5, 3, 3));
console.log(solution(4, 4, 4));
