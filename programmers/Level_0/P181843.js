// P181843: 부분 문자열인지 확인하기
function solution(my_string, target) {
  return Number(my_string.includes(target));
}

console.log(solution("banana", "ana"));

/**
 * 전에 배운 true = 1, false = 0이 된다는걸 이용했다.
 */
