// P12917: 문자열 내림차순으로 배치하기
function solution(s) {
  return [...s].sort().reverse().join("");
}

console.log(solution("Zbcdefg"));

/**
 * 문자를 큰 것부터 작은 순으로 정렬. 대문자 < 소문자로 간주
 */

/**
 * sort()가 기본적으로 알파벳 순으로 나열한다는 건 알고 있었다.
 * 근데 대문자 > 소문자로 나열하는지는 새롭게 배웠다.
 */
