// P181906: 접두사인지 확인하기
function solution(my_string, is_prefix) {
  return my_string.startsWith(is_prefix) ? 1 : 0;
}

console.log(solution("banana", "ban"));
