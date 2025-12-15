// P86491: 최소직사각형
function solution(sizes) {
  const sortedSizes = sizes.map((size) => size.sort((a, b) => b - a));
  const widths = sortedSizes.map((size) => size[0]);
  const heights = sortedSizes.map((size) => size[1]);
  return Math.max(...widths) * Math.max(...heights);
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);

/**
 * 다양한 모양과 크기의 명함을 모두 수납할 수 있으면서 작은 지갑 만들기. 명함을 가로/세로로 눕혀 수납할 수 있음.
 * - 가로/세로 눕힐 수 있으니까, 각 배열을 오름차순으로 나열.
 * - 그리고 가로/세로에서 각각 최대를 뽑기
 */

/**
 * 지금 내 코드를 아래와 같은 방식으로 바꿀 수도 있다.
 *   const [maxWidth, maxHeight] = sizes.reduce(
 *   ([w, h], [a, b]) => {
 *     const [longer, shorter] = a > b ? [a, b] : [b, a];
 *     return [Math.max(w, longer), Math.max(h, shorter)];
 *   },
 *   [0, 0]
 * );
 */
