// P181869: 공백으로 구분하기 1
function solution(my_string) {
  return my_string.split(" ");
}

console.log(solution("i love you"));

/**
 * 이번 문제는 단일 공백일 때 구분하면 돼서 split(" ")으로 풀었다.
 * 근데 1개 이상의 공백이 연속된다면 정규식으로 풀면 될 것 같다.
 */
