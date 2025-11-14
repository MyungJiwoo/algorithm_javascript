// P181842: 부분 문자열
function solution(str1, str2) {
  return str2.includes(str1) ? 1 : 0;
}

console.log(solution("abc", "aabcc"));

/**
 * 문자열 A가 문자열 B에 속하면 1, 아니라면 0을 반환
 */

/**
 * 단순히 true/false를 숫자로 바꾸면 1/0이기 때문에, 그 방법을 쓰는 것이 더 낫다고 생각한다.
 * => return +str2.includes(str1);
 */
