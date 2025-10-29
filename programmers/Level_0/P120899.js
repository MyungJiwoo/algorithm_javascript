// P120899: 가장 큰 수 찾기
function solution(array) {
  const max = Math.max(...array);
  return [max, array.indexOf(max)];
}

console.log(solution([1, 8, 3]));
console.log(solution([9, 10, 11, 8]));

/**
 * 가장 큰 수만 있으면 Math.max()를 쓰려고 했는데, 인덱스를 담은 배열도 필요하니까 못 쓸듯.
 * Math.max + filter 조합? (문제 조건에 중복된 숫자는 없다고 한다.)
 *
 * filter에 조건에 맞으면 index 반환하도록이 되나? => 안되는 듯
 * 안되면 그냥 indexOf() 쓰면 될 듯.
 *
 * 다른 사람 풀이를 보니 내 코드랑 똑같다. 이게 제일 간단한 방법인 듯.
 */
