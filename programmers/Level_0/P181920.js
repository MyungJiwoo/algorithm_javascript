// P181920: 카운트 업
function solution(start_num, end_num) {
  const answer = [];
  for (let i = start_num; i <= end_num; i++) answer.push(i);
  return answer;
}

console.log(solution(3, 10));
