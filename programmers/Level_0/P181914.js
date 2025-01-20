// P181914: 9로 나눈 나머지
function solution(number) {
  const digitTotal = [...number].reduce((acc, cur) => {
    return +acc + +cur;
  });

  return digitTotal % 9;
}

console.log(solution("78720646226947352489"));
