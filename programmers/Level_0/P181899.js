// P181999: 카운트 다운
function solution(start_num, end_num) {
  const answer = [];
  for (let num = start_num; num >= end_num; num--) answer.push(num);
  return answer;
}

console.log(solution(10, 3));
