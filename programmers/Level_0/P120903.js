// P120903: 배열의 유사도

function solution(s1, s2) {
  const set1 = new Set(s1);
  const set2 = new Set(s2);
  const intersection = new Set([...set1].filter((value) => set2.has(value)));
  return intersection.size;
}

console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"]));

// set1.intersection(set2)는 24년도에 새로나온 문법이라 프로그래머스에서 지원하지 않는듯 하다.
/* 다른 사람의 풀이
const intersection = s1.filter((x) => s2.includes(x)); <- 이렇게 배열에서 바로 filter를 써도 된다.
*/
