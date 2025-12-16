// P181878: 원하는 문자열 찾기
function solution(myString, pat) {
  return Number(myString.toLowerCase().includes(pat.toLowerCase()));
}

console.log(solution("AbCdEfG", "aBc"));

/**
 * 원하는 문자열이 존재하면 1, 없다면 0을 반환. 단, 대소문자는 구분하지 않는다.
 */
