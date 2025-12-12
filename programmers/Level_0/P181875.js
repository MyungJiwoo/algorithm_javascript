// P181875: 배열에서 문자열 대소문자 변환하기
function solution(strArr) {
  return strArr.map((str, index) => {
    if (index % 2 == 1) return str.toUpperCase();
    else return str.toLowerCase();
  });
}

console.log(solution(["AAA", "BBB", "CCC", "DDD"]));

/**
 * 모든 원소가 알파벳으로만 이루어져 있을 때, 배열에서 홀수번째 인덱스의 문자열은 모두 대문자로, 짝수번째는 소문자로 반환
 */

/**
 * 다른 사람 풀이를 보니 푸는 방법은 같은데 삼항연산자를 사용해서 조금 더 간결하게 적었다.
 */
