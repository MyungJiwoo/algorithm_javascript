// P181929: 원소들의 곱과 합
function solution(num_list) {
  const totalProduct = num_list.reduce((acc, cur) => {
    return acc * cur;
  });

  const totalSumSquared =
    num_list.reduce((acc, cur) => {
      return acc + cur;
    }) ** 2;

  return totalProduct < totalSumSquared ? 1 : 0;
}

console.log(solution([3, 4, 5, 2, 1]));

// 모든 원소들의 곱이 모든 원소들의 합의 제곱
