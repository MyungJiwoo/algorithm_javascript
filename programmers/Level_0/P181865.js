// P181865: 간단한 식 계산하기
function solution(binomial) {
  return eval(binomial);
}

console.log(solution("43 + 12"));

/**
 * 주어진 문자열 계산식의 답을 구한다는 점에서 바로 `eval()`이 떠올라서 사용했다.
 * - eval() : 복잡한 식도 문자열 그대로 계산 가능하다는 장점이 있지만, 보안 취약점 및 성능 저하로 사용을 피하는 추세이다.
 */
