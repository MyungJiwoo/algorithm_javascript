// P181864: 문자열 바꿔서 찾기
function solution(myString, pat) {
  const convertedPat = [...pat]
    .map((char) => {
      if (char === "A") return "B";
      if (char === "B") return "A";
    })
    .join("");

  return myString.indexOf(convertedPat) !== -1 ? 1 : 0;
}

console.log(solution("ABBAA", "AABB"));
console.log(solution("ABAB", "ABAB"));

/**
 * 문자열 2개가 주어진다. myString의 A->B, B->A로 바꿨을 때, 부분 문자열 중 pat이 있다면 1, 없다면 0
 * - myString의 A와 B를 변환한다.
 * - myString에서 pat을 찾는다.
 * - pat이 있다면 1, 없다면 0을 반환한다.
 */

/**
 * 일단 myString보다 pat의 길이가 더 짧은데, pat을 변환해도 되지 않나?
 */

/**
 * 다른 사람의 풀이를 보니, A->B 변환은 비슷했다.
 * 근데 나는 indexOf()를 썼는데, includes()를 써서 풀 수 있었다.
 * includes()는 애초에 유무를 Boolean으로 반환하기 때문에 이번 문제에 더 잘맞는 메서드라고 생각한다.
 */
