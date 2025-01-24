// P181904: 세로 읽기
function solution(my_string, m, c) {
  let answer = "";
  for (let i = c; i <= my_string.length; i += m) {
    answer += my_string[i - 1];
  }
  return answer;
}

console.log(solution("ihrhbakrfpndopljhygc", 4, 2));
