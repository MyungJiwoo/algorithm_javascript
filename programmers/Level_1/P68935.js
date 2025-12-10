// P68935: 3진법 뒤집기
function solution(n) {
  const reversedTernary = [...n.toString(3)].reverse().join("");
  return Number(parseInt(reversedTernary, 3).toString(10));
}

// function solution(n) {
//   let ternary = "";
//   while (n !== 0) {
//     ternary += Math.floor(n % 3);
//     n = Math.floor(n / 3);
//   }

//   return ternary;
// }

console.log(solution(125));

/**
 * 주어진 10진법을 3진법으로 만들고 역순으로 바꾼뒤 다시 10진수로 바꾸기.
 * => 핵심은 n진법으로 바꾸는 방법 (계속 나눗셈하고 그 나머지를 기록)
 * 3진법: 0, 1, 2만 사용
 */

/**
 * 처음에는 js에서 n진수를 다루는 메소드가 있는지 모르고 나눗셈으로 직접 변환했다.
 * 근데 toString()과 parseInt()로 진수 변환할 수 있다는 걸 알고 바로 적용해서 간결하게 풀 수 있었다.
 * - parseInt(string, radix) : n진수의 문자열 값과 진수를 통해 변환한다.
 * - numObj.toString([radix]) : 정수를 n진수로 바꾼다.
 * ==> 10진수를 다른 진수로 변환할 때는 toString() / 다른 진수를 10진수로 변환할 때는 parseInt() 사용
 */
