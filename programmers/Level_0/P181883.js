// P181883: 수열과 구간 쿼리 1
const add = (arr, s, e) => {
  for (; s <= e; s++) arr[s] += 1;
};

function solution(arr, queries) {
  queries.map((query) => {
    add(arr, query[0], query[1]);
  });

  return arr;
}

console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 1],
      [1, 2],
      [2, 3],
    ]
  )
);
