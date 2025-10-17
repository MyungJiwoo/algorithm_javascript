// P120845: 주사위의 개수
function solution(box, n) {
  const [x, y, z] = [...box];
  return Math.floor(x / n) * Math.floor(y / n) * Math.floor(z / n);
}

console.log(solution([10, 8, 6], 3));

/**
 * 다른 사람 풀이를 보니 나랑 똑같이 구조분해 할당 & Math.floor() & 나눗셈 조합으로 풀었다.
 */
