// P12932: 자연수 뒤집어 배열로 만들기
function solution(n) {
  return String(n)
    .split("")
    .reverse()
    .map((num) => Number(num));
}

console.log(solution(12345));

/**
 * 나는 형변환할 때 String()이나 Number()를 쓰는 편인데,
 * parseInt()와 toString()도 있으니 다양하게 활용하기!
 *
 * 아직까지는 1단계가 쉽구만..
 */
