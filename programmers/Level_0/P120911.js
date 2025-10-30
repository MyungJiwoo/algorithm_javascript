// P120911: 문자열 정렬하기(2)
function solution(my_string) {
  // 1. 한 줄 버전 (리팩토링)
  return [...my_string.toLowerCase()].sort().join("");

  // 2. 풀어 쓴 버전
  // const lowerMyString = my_string.toLowerCase();
  // const lowerMyStringArray = [...lowerMyString].sort();
  // return lowerMyStringArray.join("");
}

console.log(solution("Bcad"));

/**
 * 영어 대소문자로 이루어진 문자열이 주어질 때, 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열
 * - [x] my_string을 모두 소문자로 변경한다.
 * - [x] my_string을 문자 하나 단위로 배열로 변경한다.
 * - [x] sort() 메소드를 통해 알파벳 순서대로 정렬한다.
 * - [x] 정렬한 배열을 문자열로 바꾸어 반환한다.
 */
