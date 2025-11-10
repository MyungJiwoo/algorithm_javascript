// P181840: 정수 찾기
function solution(num_list, n) {
  return num_list.includes(n) ? 1 : 0;
}

console.log(solution([1, 2, 3, 4, 5], 3));

/**
 * 정수 리스트 num_list와 n이 주어질 때, n이 있으면 1, 없으면 0
 */

/**
 * 전에 다른 사람 풀이로 배운 includes()를 썼다.
 * includes()는 문자열뿐 아니라 배열도 메서드도 있다.
 */
