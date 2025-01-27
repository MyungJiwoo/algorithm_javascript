// P181898: 가까운 1 찾기
function solution(arr, idx) {
  const oneIndex = arr.slice(idx).indexOf(1);
  return oneIndex > -1 ? oneIndex + idx : -1;
}

console.log(solution([0, 0, 0, 1], 1));
console.log(solution([1, 0, 0, 1, 0, 0], 4));
console.log(solution([1, 1, 1, 1, 0], 3));
