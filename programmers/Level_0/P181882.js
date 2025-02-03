// P181882: 조건에 맞게 수열 변환하기 1
function solution(arr) {
  return arr.map((num) => {
    if (num >= 50 && num % 2 === 0) return num / 2;
    else if (num < 50 && num % 2 === 1) return num * 2;
    else return num;
  });
}

console.log(solution([1, 2, 3, 100, 99, 98]));
