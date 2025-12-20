// P181833: 특별한 이차원 배열 1
function solution(n) {
  const result = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );

  for (let i = 0; i < n; i++) {
    result[i][i] = 1;
  }

  return result;
}

console.log(solution(3));

/**
 * 정수 n이 매개변수로 주어질 때, 다음과 같은 n*n 크기의 이차원 배열을 리턴
 * - 우선 이차원 배열을 모두 0으로 세팅
 * - [0][0], [1][1], [2][2]... 이런 인덱스만 1로 변경
 */

/**
 * ```
 * new Array(n).fill(new Array(n).fill(0));
 * ```
 * 이렇게 배열을 만들어서 [0][0], [1][1] 같은 인덱스에만 1로 바뀌게 했는데 자꾸 모든 원소가 동기화 됐다.
 * 그 이유는 배열 생성 코드가, n개의 서로 다른 2차원 배열을 만든게 아니라 같은 배열 하나를 n번씩 참조하게 만든 것이기 때문이다.
 * fill()이 같은 배열의 주소를 복사하는 것이 이유이다. == fill에 객체(배열, 함수, 객체 리터럴)를 넣으면 참조 공유
 *
 * 따라서 내가 의도한대로 배열을 생성하려면
 * ```
 * Array.from({ length: n }, () =>
 *   Array.from({ length: n }, () => 0)
 * );
 * ```
 * 혹은
 * ```
 * Array.from(Array(n), () => Array(n).fill(0));
 * ```
 * 이런식으로 작성해야 한다. (혹은 아예 for문으로 만들거나)
 */

/**
 * 다른 사람 풀이를 보니 배열 생성하는 방법 외에 다른 점은 없다.
 */
