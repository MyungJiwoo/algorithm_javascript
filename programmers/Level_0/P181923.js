// P181923: 수열과 구간 쿼리 2
function solution(arr, queries) {
  const answerArr = [];

  queries.map((query) => {
    const [s, e, k] = query;
    const sliceArr = arr.slice(s, e + 1);
    const filterArr = sliceArr.filter((num) => num > k);
    filterArr.sort((a, b) => a - b);

    if (filterArr.length > 0) answerArr.push(filterArr[0]);
    else answerArr.push(-1);
  });

  return answerArr;
}
console.log(solution([1, 2, 3, 4, 5], [[1, 3, 5]])); // [-1]
console.log(solution([10, 20, 30], [[0, 2, 5]])); // [10]
console.log(solution([1, 2, 3, 3, 5], [[0, 4, 3]])); // [5]
console.log(solution([5, 4, 3, 2, 1], [[0, 4, 3]])); // [4]
console.log(solution([3, 3, 3, 3], [[0, 3, 2]])); // [3]
console.log(solution([3, 3, 3, 3], [[0, 3, 3]])); // [-1]
console.log(solution([4, 4, 4, 6, 6], [[0, 4, 4]])); // [6]
// 같은 값(4)들이 여러 개 있을 때도 k보다 큰 최소값(6)을 찾아야 함.
console.log(solution([1, 3, 5, 7], [[0, 3, 10]])); // [-1]
// 범위 내에서 k(10)보다 큰 값이 없어야 함.
console.log(solution([5, 6, 7], [[1, 1, 5]])); // [6]
// 단일 값 탐색에서도 정상 작동해야 함.
// console.log(
//   solution(
//     [7, 8, 9],
//     [
//       [0, 2, 10],
//       [0, 2, 3],
//     ]
//   )
// );

/*
- 인덱싱으로 부분 배열 만들기
- 부분 배열 정렬
- k의 인덱스 알아내서 그 다음 인덱스 리턴
*/

// if (k > sliceArr[sliceArr.length - 1]) answerArr.push(-1);
// else if (k < sliceArr[0]) answerArr.push(sliceArr[0]);
// else {
//   answer = sliceArr[sliceArr.lastIndexOf(k) + 1];
//   if (answer !== undefined) answerArr.push(answer);
//   else answerArr.push(-1);
// }
