// P181879: 길이에 따른 연산
function solution(num_list) {
  return num_list.length > 10
    ? num_list.reduce((a, c) => a + c, 0)
    : num_list.reduce((a, c) => a * c, 1);
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 1]));

/**
 * 정수 배열에서 리스트의 길이가 11 이상이면 리스트에 이쓴ㄴ 모든 원소의 합을 리턴 / 10 이하면 모든 원소의 곱을 리턴
 */

/**
 * 문제는 금방 풀었는데 조건을 잘못 체크해서 (reduce 곱의 초기값을 0으로 잡았다거나, 길이 11 이상인데 코드로는 > 11 으로 작성한다거나...) 시간이 조금 더 걸렸다.
 */
