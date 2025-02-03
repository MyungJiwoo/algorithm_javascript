// P181884: n보다 커질 때까지 더하기
function solution(numbers, n) {
  return numbers.reduce((acc, cur, idx, arr) => {
    if (acc + cur > n) arr.splice(1);
    return acc + cur;
  }, 0);
}

console.log(solution([34, 5, 71, 29, 100, 34], 123));
console.log(solution([58, 44, 27, 10, 100], 139));
