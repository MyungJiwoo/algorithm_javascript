// P181887: 홀수 vs 짝수
function solution(num_list) {
  const totalOdd = num_list
    .filter((_, index) => !(index % 2))
    .reduce((acc, cur) => acc + cur);

  const totalEven = num_list
    .filter((_, index) => index % 2)
    .reduce((acc, cur) => acc + cur);

  return Math.max(totalEven, totalOdd);
}

console.log(solution([4, 2, 6, 1, 7, 6]));
console.log(solution([-1, 2, 5, 6, 3]));
