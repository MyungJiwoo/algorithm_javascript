// P12950: 행렬의 덧셈
function solution(arr1, arr2) {
  const answer = [];
  for (let row = 0; row < arr1.length; row++) {
    const rowAnswer = [];
    for (let column = 0; column < arr1[row].length; column++) {
      rowAnswer.push(arr1[row][column] + arr2[row][column]);
    }
    answer.push(rowAnswer);
  }

  return answer;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);

/**
 * 행과열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과
 * - 이중 배열이라는 것.
 * - 중첩을 해야 한다.
 *
 * 우선 이중 반복문으로 풀었다. 그런데 며칠 안풀었다고.. 더 좋은 방법이 있을거 같은데 생각이 안난다.
 */

/**
 * 다른 사람의 풀이를 보니 map 두번을 중첩해서 썼다.
 * 나도 그렇게 했었는데 안됐던 이유는 나는 중첩된 내부 map을 return으로 해서 외부로 undefined가 전달되었기 때문...
 * 아깝다..ㅠ
 */
