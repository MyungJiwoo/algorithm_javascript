// P181885: 할 일 목록
function solution(todo_list, finished) {
  const answer = [];
  finished.map((status, index) => {
    !status && answer.push(todo_list[index]);
  });
  return answer;
  // 다른 사람이 쓴 코드 : todo_list.filter((e,i) => !finished[i]); => 이렇게로도 충분했다.
}

console.log(
  solution(
    ["problemsolving", "practiceguitar", "swim", "studygraph"],
    [true, false, true, false]
  )
);
