// P142086: 가장 가까운 같은 글자

const NOT_FOUND_INDEX = -1;

function solution(s) {
  const distances = [];
  for (const currentIndex in s) {
    const previousChars = s.substring(0, currentIndex);
    const lastSeenIndex = previousChars.lastIndexOf(s[currentIndex]);

    if (lastSeenIndex > NOT_FOUND_INDEX) {
      distances.push(Number(currentIndex) - lastSeenIndex);
    } else {
      distances.push(NOT_FOUND_INDEX);
    }
  }
  return distances;
}

/*
function solution(s) {
  const distances = [];
  for (const currentIndex in s) {
    const lastSeenIndex = s
      .substring(0, currentIndex)
      .lastIndexOf(s[currentIndex]);

    lastSeenIndex > NOT_FOUND_INDEX
      ? distances.push(Number(currentIndex) - lastSeenIndex)
      : distances.push(NOT_FOUND_INDEX);
  }
  return distances;
}
*/

// console.log(solution("banana"));
console.log(solution("foobar"));

/** 접근 방식
 * 1. 자기보다 앞에 나온 문자가 기준이라서, 앞을 자르면 될 것 같다.
 * 2. indexOf()로 하면 되지 않을까. (같은 글자가 없다면 -1 리턴)
 *
 * 문제는 몇 번째 인덱스가 아니라, 내 인덱스에서 몇 칸 앞에 있는지를 구해야 함.
 */

/** 다른 사람 풀이
 * 객체에 인덱스를 저장하는 방식도 쓰고, 문자열을 map으로 순회하며 지금까지의 인덱스를 잘라서 나처럼 하는 방법도 있는 것 같다.
 */
