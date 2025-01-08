// P77484: 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
  const rankMatching = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 };
  // const rank = [6, 6, 5, 4, 3, 2, 1];
  const minCount = lottos.filter((num) => win_nums.includes(num)).length;
  const zeroCount = lottos.filter((num) => num === 0).length;

  const maxWin = rankMatching[minCount + zeroCount];
  const minWin = rankMatching[minCount];

  return [maxWin, minWin];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
