// P181888: n개 간격의 원소들
function solution(num_list, n) {
  return num_list.filter((_, index) => !(index % n));
}

console.log(solution([4, 2, 6, 1, 7, 6], 2));
