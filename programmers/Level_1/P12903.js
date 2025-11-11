// P12903: 가운데 글자 가져오기
function solution(s) {
  return s.length % 2 == 0
    ? s[Math.floor(s.length / 2 - 1)] + s[Math.floor(s.length / 2)]
    : s[Math.floor(s.length / 2)];
}

console.log(solution("abcdef"));

/**
 * 문자열의 가운데 글자 반환. 글자 수가 짝수라면 2글자 반환.
 */

/**
 * 다른 사람의 풀이를 보니,
 * `return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);`
 * 이렇게 substr의 파라미터 값 자체를 조정하는 것도 괜찮은 방법이었다.
 */
