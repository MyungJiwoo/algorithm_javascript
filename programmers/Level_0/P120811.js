// P120811: 중앙값 구하기

function solution(array) {
  array.sort((a, b) => a - b);
  return array[Math.floor(array.length / 2)];
}

console.log(solution([9, -1, 0]));

/**
 * 숫자를 정렬하고 중앙 인덱스 값을 리턴 (array의 길이는 항상 홀수)
 *
 * 중앙 인덱스값을 구하려면 0부터 시작이라서 길이/2의 Math.floor으로 버림을 해야 한다.
 */
