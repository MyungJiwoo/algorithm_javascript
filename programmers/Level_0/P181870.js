// P181870: ad 제거하기
function solution(strArr) {
  return strArr.filter((str) => !str.includes("ad"));
}

console.log(solution(["and", "notad", "abcd"]));

/**
 * 주어진 배열에서  "ad" 부분 문자열이 포함된 요소는 제거하기
 */

/**
 * 다른 사람 풀이도 같았다.
 * 사실 처음에는 부분 문자열이 있는지 확인하는 것만 생각났고, for문 써야 하나? 생각했는데
 * filter가 생각났다. 쉽지만 꾸준히 문제를 풀었던게 나름 도움이...
 */
