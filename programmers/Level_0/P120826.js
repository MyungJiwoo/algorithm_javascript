// P120826: 특정 문자 제거하기
function solution(my_string, letter) {
  return my_string.replaceAll(letter, "");
}

console.log(solution("abcdef", "i"));
