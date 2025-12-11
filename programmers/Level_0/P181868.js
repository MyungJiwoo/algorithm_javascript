// P181868: 공백으로 구분하기 2
function solution(my_string) {
  return my_string.trim().split(/\s+/);
}

console.log(solution(" i    love  you"));

/**
 * split의 인자로 정규식을 넣을 수 있다는 것을 잊지 말자.
 */
