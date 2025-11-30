// P181854: 배열의 길이에 따라 다른 연산하기
function solution(arr, n) {
  let index = arr.length % 2 == 0 ? 1 : 0;
  for (index; index < arr.length; index += 2) {
    arr.splice(index, 1, arr[index] + n);
  }
  return arr;
}

console.log(solution([49, 12, 100, 276, 33], 27));

/**
 * arr의 길이가 홀수라면 짝수 인덱스에 n을 더한 배열을, 홀수라면 홀수 인덱스에 n을 더한 배열을 반환
 * - filter를 사용할 수 있으려나 => filter는 요소를 아예 걸러내는거라 적합하지 않은 듯.
 */

/**
 * map 안에서 삼항 연산자로 배열의 길이 홀/짝 + 현재 인덱스의 홀/짝을 비교해서 계산하는 방법이 있다.
 * `arr.length % 2 !== idx % 2 ? num + n : num`
 */
