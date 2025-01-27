// P181894: 2의 영역
function solution(arr) {
  const start = arr.indexOf(2);
  const end = arr.lastIndexOf(2) + 1;
  const answer = arr.slice(start, end);
  return answer.length == 0 ? [-1] : answer;
}

console.log(solution([1, 2, 1, 4, 5, 2, 9]));
console.log(solution([1, 2, 1]));
console.log(solution([1, 1, 1]));
console.log(solution([1, 2, 1, 2, 1, 10, 2, 1]));
