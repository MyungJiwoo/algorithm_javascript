// P120851: 숨어있는 숫자의 덧셈(1)
function solution(my_string) {
  return [...my_string]
    .filter((str) => !isNaN(str))
    .reduce((acc, cur) => +acc + +cur, 0);
}

console.log(solution("aAb1B2cC34oOp"));

/**
 * 다른 사람의 풀이를 보니 정규식으로 숫자를 필터링한 방법도 있었다.
 * 오랜만에 reduce를 썼다. 사용법 매일 헷갈림...
 */
