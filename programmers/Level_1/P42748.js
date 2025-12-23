// P42748: k번째 수
function solution(array, commands) {
  const result = [];
  for (let command of commands) {
    const [start, end, position] = [command[0] - 1, command[1], command[2] - 1];
    const slicedArr = array.slice(start, end);
    const sortedArr = slicedArr.sort((a, b) => a - b);
    result.push(sortedArr[position]);
  }
  return result;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);

/**
 * array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번쨰에 있는 수를 구해라.
 */

/**
 * 정렬이라서 효율성 검사가 있을 줄 알았는데 없어서 통과했다.
 * 그냥 문제 그대로 자르고 정렬하고 원하는 인덱스에 있는 숫자를 반환했다.
 */
