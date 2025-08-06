// P161989: 덧칠하기
const solution = (n, m, section) => {
  let count = 0;
  let i = 0;

  while (i < section.length) {
    const painted = section[i];
    count += 1;

    while (section[i] < painted + m) {
      i += 1;
    }
  }

  return count;
};

console.log(solution(8, 4, [2, 3, 6]));
// console.log(solution(11, 2, [1, 2, 5, 10, 11]));

// n을 넘지 않을 때까지
// section[0] + m => 기록
// section[마지막]을 넘는가?

/**
 * n = 11
 * m = 2
 * section = [1, 2, 5, 10, 11]
 * 답은 3 (1~2, 5~6, 10~11)
 *
 * 11 / 2
 */

/**
 * 필터로 골라낼까?
 */

/**
 * at(-1) : 마지막 요소
 */
