// P181832: 정수를 나선형으로 배치하기
function solution(n) {
  const result = Array.from(Array(n), () => Array(n).fill(0));
  let num = 1;
  let row = 0;
  let col = 0;

  for (let i = n; i > 0; i -= 2) {
    for (let j = 0; j < i; j++) {
      result[row][col] = num++;
      col++;
    }
    col--;
    row++;

    for (let j = 0; j < i - 1; j++) {
      result[row][col] = num++;
      row++;
    }
    row--;
    col--;

    for (let j = 0; j < i - 1; j++) {
      result[row][col] = num++;
      col--;
    }
    col++;
    row--;

    for (let j = 0; j < i - 2; j++) {
      result[row][col] = num++;
      row--;
    }
    row++;
    col++;
  }

  return result;
}

console.log(solution(4));

/**
 * 정수를 나선형으로 배치한다 => 이중 for로 뭔가 해야 할 것 같다.
 *
 * 오랫동안 고민했는데 문제가 풀리지 않아서 인터넷 검색을 했다.
 * boolean 변수로 방향을 조정하고 멈추는게 아니라 그냥 여러 for문을 순차적으로 나열했다는게 새로웠다.
 * 예전이었으면 풀었을까 싶기도 하고.. 더 나은 방법이 있지 않을까 싶기도 하고... 끙
 */
