// P181892: n 번째 원소부터
function solution(num_list, n) {
  return num_list.slice(n - 1);
}

console.log(solution([2, 1, 6], 3));
