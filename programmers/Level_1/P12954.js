// P12954: x만큼 간격이 있는 n개의 숫자

function solution(x, n) {
  return Array.from({ length: n }, (_, i) => (i + 1) * x);
}

console.log(solution(2, 5));

/**
 * filter로 step 반복을 하고 싶은데 문제는 횟수를 마음대로 정할 수 없다. 배열 요소가 곧 횟수니까.
 * => 임의로 길이 n짜리 배열을 만들어서 반복? (Array.from)
 * => 배열을 생성할때 애초에 x씩 step을 한다면?
 * => 성공!
 */

/**
 * 다른 사람의 풀이를 보니 Array().fill() + map()으로 풀었다.
 * 다만 이 방식은 배열을 미리 만들어두고 재가공하는거라 효율측면에서는 나처럼 미리 생성할 때 가공하는것이 나을 것 같다!
 */

/**
 * Array.from : 배열이나 유사 배열 객체를 생성하면서 동시에 각 요소를 매핑(transform)할 수 있는 메서드
 * Array.from(arrayLike, mapFn)
 *  - arrayLike : 유사 배열 또는 이터러블 객체를 배열로 변환
 *  - mapFn : 각 요소에 적용할 매핑 함수 지정
 */
