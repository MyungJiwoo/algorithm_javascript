// P12947: 하샤드 수
function solution(x) {
  const sum = String(x)
    .split("")
    .reduce((acc, cur) => acc + +cur, 0);
  return x % sum == 0;
}

console.log(solution(10));
console.log(solution(11));
console.log(solution(12));
console.log(solution(13));

/**
 * 하샤드 수 : x의 자릿수의 합으로 x가 나누어 떨어진다.
 * ex. 18은 1+8로 9이고, 18%9==0 이므로, 18은 하샤드 수이다.
 */

/**
 * 아주 짧은 메서드 연결이었지만 콘솔에 찍어보지 않고 머리속으로 계산해봤을때 괜찮아서 제출해보니 통과했다.
 * 고민이 되는건 이렇게 메서드만 많이 써도 되냐는건데...
 */
