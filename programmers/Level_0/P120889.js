// P120889: 삼각형의 완성조건 (1)
function solution(sides) {
  const sortedSides = sides.sort((a, b) => b - a);
  return sortedSides[0] < sortedSides[1] + sortedSides[2] ? 1 : 2;
}

console.log(solution([1, 2, 3]));
console.log(solution([3, 6, 2]));
console.log(solution([199, 72, 222]));

/**
 * 접근 방식 : 숫자를 내림차순해서 첫 번째 요소와 나머지 요소의 합을 비교
 * 다른 사람이 푼 풀이 : 풀이의 흐름 자체는 비슷하다. 근데 나는 sortedSides로 한 번 저장 더 저장했는데,  `const [long, a, b] = sides.sort((a,b) => b-a);` 이런식으로 바로 구조 분해 할당을 사용하기도 했다.
 */
