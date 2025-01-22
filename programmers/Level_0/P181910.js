// P181910: 문자열의 뒤의 n글자
function solution(my_string, n) {
  return my_string.slice(-1 * n);
}

console.log(solution("ProgrammerS123", 11));
