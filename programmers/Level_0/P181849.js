// P181849: 문자열 정수의 합
function solution(num_str) {
  return [...num_str].reduce((a, b) => a + Number(b), 0);
}

console.log(solution("123456789"));
