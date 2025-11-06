// P120904: 숫자 찾기
function solution(num, k) {
  const idx = [...String(num)].indexOf(String(k));
  return idx == -1 ? -1 : Number(idx) + 1;
}

console.log(solution(29183, 1));

/**
 * 정수 num을 이루는 숫자 중 k가 있다면 그 숫자가 있는 자리 수를 return. 가장 처음에 나오는 인덱스이고, 없다면 -1 리턴
 * - 정수 num에서 숫자 k가 있는 첫번째 인덱스를 찾는다.
 * - 없다면 -1를 반환한다.
 * - 있다면 찾은 인덱스를 반환한다.
 */

/**
 * 문제의 예외 상황을 먼저 파악하지 못해 시간이 좀 걸렸다.
 * 기본적인 js 문법도 암기할게 몇 개 있는 듯.
 */

/**
 * indexOf() : 배열 안에 몇 번째 인덱스인지 반환
 * findIndex() : 배열 안 내용물이 객체일 때, 객체 배열에서 객체가 몇 번쨰에 있는지 콜백 함수로 검사해서 반환
 * find() : 콜백 함수로 주어진 조건에 맞는 내용을 통째로 반환
 */

/**
 * a || b: 왼쪽 값이 falsy라면 오른쪽 반환
 * a && b: 왼쪽 값이 truthy일 때만 오른쪽 반환
 * a ?? b: 왼쪽 값이 null 또는 undefined일 때만 오른쪽 반환
 */
