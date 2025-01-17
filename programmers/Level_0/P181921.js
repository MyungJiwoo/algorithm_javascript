// P181921: 배열 만들기 2
function solution(l, r) {
  const answer = [];
  for (let i = l; i <= r; i++) {
    i = String(i);
    if (i.match(/^[05]+$/)) answer.push(+i);
  }

  return answer.length > 0 ? answer : [-1];
}

console.log(solution(5, 555));
