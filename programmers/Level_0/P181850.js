// P181850: 정수 부분
function solution(flo) {
  return Math.floor(flo);
}

console.log(solution(1.42));

/**
 * 정수 부분을 return
 * - 정수 부분을 추출해서 반환한다.
 */

/**
 * 나는 floor로 했지만, Math.trunc() 자체는 정수 부분만 반환한다.
 */
