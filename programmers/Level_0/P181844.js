// P181844: 배열의 원소 삭제하기
function solution(arr, delete_list) {
  return arr.filter((x) => !delete_list.includes(x));
}

console.log(solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12]));

/**
 * arr, delete_list의 2개의 배열을 주고, arr의 원소에서 delete_list의 원소 모두 삭제하고 arr의 순서는 유지해서 반환.
 * - arr 배열에서 delete_list와 일치한 요소를 삭제한다.
 */

/**
 * filter와 includes로 차집합을 구했다.
 */
