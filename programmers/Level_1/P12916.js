// P12916: 문자열 내 p와 y의 개수
function solution(s) {
  const sLowerArray = s.toLowerCase().split("");
  let pCount = 0;
  let yCount = 0;

  for (let c of sLowerArray) {
    if (c === "p") pCount += 1;
    else if (c === "y") yCount += 1;
  }

  return pCount == yCount ? true : false;
}

console.log(solution("pPoooyY"));

/**
 * 대소문자가 섞여있는 문자열. p와 y의 개수를 비교해 같으면 True, 다르면 Fasle. 둘 다  없다면 항상 True. 대소문자는 신경쓰지 않는다.
 *
 * - [x] 문자열을 모두 소문자로 변경한다.
 * - [x] p와 y를 분리한다.
 * - [x] 두 개수가 같다면 True, 다르면 False를 반환한다.
 * - [x] 두 문자가 모두 없다면 True를 반환한다.
 */

/**
 * 내가 쓴 요구사항 목록을 What으로 바꾼 버전
 * - 문자열 내 'p'의 개수와 'y'의 개수를 비교해 결과를 반환한다.
 * - 대소문자는 구분하지 않는다.
 * - 두 문자가 모두 없으면 True를 반환한다.
 * - 두 문자의 개수가 같으면 True, 다르면 False를 반환한다.
 *
 * How로 바꾼 버전
 * - [x] 문자열을 모두 소문자로 변환한다.
 * - [x] 문자열에서 'p'의 개수를 센다.
 * - [x] 문자열에서 'y'의 개수를 센다.
 * - [x] 두 문자가 모두 없으면 True를 반환한다.
 * - [x] 두 개수가 같으면 True, 다르면 False를 반환한다.
 */

/**
 * 다른 사람의 풀이를 보니 split으로 아주 깔끔하게 풀었다.
 * `return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;`
 * split으로 분리해서 나온 배열의 개수가 같으면 되는거니까...
 *
 * 예를 들어 "pPoooyY"을 모두 대문자로 바꾸고 split("P")를 했다면 아래와 같은 배열이 출력된다.
 * [ '', '', 'OOOYY' ]
 * 즉 P가 사라지지만 그 자리는 빈 문자열로 하나의 요소가 된다.
 */
