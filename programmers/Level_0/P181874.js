// P181874: A 강조하기
function solution(myString) {
  return myString.toLowerCase().replaceAll("a", "A");
}

console.log(solution("abstract algebra"));

/**
 * a는 A로 바꾸고 다른 문자는 모두 소문자로 바꿔라.
 */

/**
 * 다른 사람 풀이도 비슷하고, 어렵지 않았다.
 */
