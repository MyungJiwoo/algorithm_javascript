// P120905: n의 배수 고르기
function solution(n, numlist) {
  return numlist.filter((num) => num % n === 0);
}

console.log(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]));

/**
 * 배열에서 어떤 조건이 아닌 수를 골라낸다 + 배열로 반환 -> 하자마자 바로 filter 생각이 났다.
 * filter는 얕은 복사를 한다. 즉 원본 배열에 영향을 주지 않는다.
 */
