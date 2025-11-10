// P12948: 핸드폰 번호 가리기
function solution(phone_number) {
  return "*".repeat(phone_number.slice(0, -4).length) + phone_number.slice(-4);
}

console.log(solution("01033334444"));

/**
 * 맨 뒷번호 4자리 빼고 모두 *로 변경
 * - 맨 뒷자리 4자리 빼고의 문자열을 모두 *으로 변경한다.
 */

/**
 * 다른 사람의 풀이를 보니, 지금 내 코드에서 slice(0, -4)로 구하지 않고, 그냥 전체 길이에서 -4한 길이를 구했다. 이 풀이가 연산을 줄일 수 있어서 더 나은 방법 같다.
 * `"*".repeat(s.length - 4) + s.slice(-4);`
 */
