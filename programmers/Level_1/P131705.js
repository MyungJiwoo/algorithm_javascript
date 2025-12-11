// P131705: 삼총사
/**
 * 조합 구하는 함수
 * @param {*} arr 조합 대상이 되는 숫자 배열
 * @param {*} selectNumber 조합 개수
 * @returns 조합 결과
 */
const getCombinations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((item) => [item]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((item) => [fixed, ...item]);
    results.push(...attached);
  });

  return results;
};

function solution(number) {
  const combinations = getCombinations(number, 3);
  const filtered = combinations.filter(
    (arr) => arr.reduce((acc, cur) => acc + cur, 0) === 0
  );
  return filtered.length;
}

console.log(solution([-2, 3, 0, 2, -5]));

/**
 * 학생들은 각자 정수 번호를 갖는다. 3명의 정수 번호를 더했을 때 0이 되면 삼총사라고 부른다. 삼총사가 되는 경우의 수
 * => 주어진 정수 배열에서 3개를 더했을 때 0이 되는 경우의 수를 구해라.
 *
 * - 우선 조합으로 3개씩 묶어야함.
 * - 각 조합의 합을 구한다.
 * - 합이 0인 삼총사의 개수를 구한다.
 */

/**
 * '조합'으로 풀어야겠다는 접근은 다른 사람 풀이와 비슷했다.
 * 조합 구하는 코드는 잘 모르겠어서 인터넷에서 보고 가져왔다....
 * 암기라도 하거나 내가 제대로 구현해보고 내것으로 만들어야 하는데...
 * 조합외에는 쉽게 풀었다.
 */
