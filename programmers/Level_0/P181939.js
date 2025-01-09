// P181939: 더 크게 합치기

function solution(a, b) {
  let answer = "";
  {
    Number(a + "" + b) >= Number(b + "" + a)
      ? (answer = a + "" + b)
      : (answer = b + "" + a);
  }

  return Number(answer);
  // return Math.max(Number(`${a}${b}`), Number(`${b}${a}`)) => 다른 사람 풀이
}

console.log(solution(9, 91));
console.log(solution(89, 8));
