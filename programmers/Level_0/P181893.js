// P181893: 배열 조각하기
function solution(arr, query) {
  query.map((num, index) => {
    index % 2 == 0 ? (arr = arr.slice(0, num + 1)) : (arr = arr.slice(num));
  });
  return arr;
}

console.log(solution([0, 1, 2, 3, 4, 5], [4, 1, 2]));
