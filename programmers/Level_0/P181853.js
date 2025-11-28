// P181853: 뒤에서 5등까지
function solution(num_list) {
  return num_list.sort((a, b) => a - b).splice(0, 5);
}

console.log(solution([12, 4, 15, 46, 38, 1, 14]));

/**
 * 주어진 등수 배열 중 가장 작은 5개의 수를 오름차순으로 담아서 반환
 */

/**
 * 배열 자르는 메서드를 splice, slice로 다양하게 사용할 수 있다.
 * - slice : 배열의 일부분을 추출해 새로운 배열 반환
 * - splice : 원본 배열 수정
 */
