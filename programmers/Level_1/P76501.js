// P76501: 음양 더하기
function solution(absolutes, signs) {
  return absolutes
    .map((num) => {
      if (!signs.shift()) return num * -1;
      return num;
    })
    .reduce((acc, cur) => acc + cur, 0);
}

console.log(solution([4, 7, 12], [true, false, true]));

/**
 * 정수들의 절댓값을 차례대로 담은 정수 배열, 부호를 차례대로 담은 불리언 배열. 실제 정수들의 합을 구해서 반환
 * - 각 정수들의 부호를 판별한다. (부호 리스트의 각 요소가 true이면 해당 절댓값을 양수로, false이면 음수로 변환한다.)
 * - 합계를 구한다.
 * - 반환한다.
 */

/**
 * 다른 사람의 풀이를 보니 내가 원했던 흐름이 있었다.
 * `return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);`
 * 삼항 연산자..를 썼어야 했는데... (1이 필요함) ||으로 하려다보니... 해결을 못했다. ㅠ
 *
 * 다만 index를 직접 쓰지 않도록 선언적인 방법을 조금 더 고민해볼 것 같다.
 */
