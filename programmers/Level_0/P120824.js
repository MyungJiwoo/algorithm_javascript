// P120824: 짝수 홀수 개수

function solution(num_list) {
  const count_even = num_list.filter((num) => num % 2 == 0).length;
  return [count_even, num_list.length - count_even];
}

console.log(solution([1, 2, 3, 4, 5]));

// 어차피 정수는 짝수 아니면 홀수이기 때문에 length를 활용해 계산을 최소한으로 했다.
