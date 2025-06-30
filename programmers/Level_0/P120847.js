// P120847: 최댓값 만들기(1)

function solution(numbers) {
  const sorted = numbers.sort((a, b) => a - b);
  return sorted.pop() * sorted.pop();
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([0, 31, 24, 10, 1, 9]));

// 숫자 배열을 정렬하여 1, 2번째 최댓값을 구했다.
