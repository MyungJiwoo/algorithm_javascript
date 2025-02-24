// P120817: 배열의 평균값
function solution(numbers) {
  return numbers.reduce((acc, cur) => acc + cur) / numbers.length;
}
