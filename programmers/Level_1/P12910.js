// P12910: 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
  const divisibleArray = arr.filter((num) => num % divisor == 0);
  return divisibleArray.length > 0
    ? divisibleArray.sort((a, b) => a - b)
    : [-1];
}

console.log(solution([5, 9, 7, 10], 5));

/**
 * 주어진 배열을 주어진 정수로 나누어 떨어지는 값을 오름차순으로 정렬
 * 나누어 떨어지는 값이 없다면 배열에 -1을 담아 반환
 * - 주어진 배열에서 주어진 정수로 나누어 떨어지는 값을 선별한다.
 * - 나누어 떨어지는 값이 없다면 [-1]을 반환
 * - 선별된 값을 오름차순 한다.
 * - 반환한다.
 */

/**
 * 다른 사람의 풀이도 나랑 같았다.
 * 문제를 끝까지 안읽어서 예외 케이스를 못 봤는데, 문제는 이해했어도 끝까지 읽기..!
 */
