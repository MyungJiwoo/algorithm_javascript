// P181916: 주사위 게임 3
function solution(a, b, c, d) {
  const dice = [null, 0, 0, 0, 0, 0, 0];

  [a, b, c, d].map((num) => {
    dice[num] += 1;
  });

  // case 1. 숫자가 다 똑같을 때
  if (dice.includes(4)) {
    return dice.indexOf(4) * 1111;
  }
  // case 2. 세 주사위가 같고 하나만 다를 때
  if (dice.includes(3)) {
    const p = dice.indexOf(3);
    const q = dice.indexOf(1);
    return (10 * p + q) ** 2;
  }
  // case 3. 두 개, 두 개 똑같을 때
  if (dice.filter((num) => num == 2).length == 2) {
    const p = dice.indexOf(2);
    const q = dice.lastIndexOf(2);
    return (p + q) * Math.abs(p - q);
  }
  // case 4. 두 주사위가 같고, 다른 숫자가 2개 있을 때
  if (dice.filter((num) => num !== 0 && num !== null).length == 3) {
    const q = dice.indexOf(1);
    const r = dice.lastIndexOf(1);
    return q * r;
  }
  // case 5. 모든 숫자가 다를 때
  if (dice.filter((num) => num == 1).length == 4) {
    return dice.indexOf(1);
  }
}

console.log(solution(2, 2, 2, 2));
console.log(solution(4, 1, 4, 4));
console.log(solution(6, 3, 3, 6));
console.log(solution(2, 5, 2, 6));
console.log(solution(6, 4, 2, 5));
