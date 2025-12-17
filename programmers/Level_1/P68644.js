// P68644: 두 개 뽑아서 더하기

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

function solution(numbers) {
  const combinations = getCombinations(numbers, 2);
  const sumArr = combinations.map((combination) =>
    combination.reduce((a, c) => a + c, 0)
  );
  return [...new Set(sumArr)].sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));

/**
 * 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 리턴
 */

/**
 * 두 수를 뽑아 모든 경우의 수를 구한다해서 이전에 썼던 조합 함수를 재사용했다.
 * 이 함수를 직접 적어야 하는데 그대로 가져왔다는 점에서 반성을... (암기라도 하자)
 * 문제 리턴 조건이 경우의 수라 Set으로 중복 제거했다. => `[...new Set(arr)]` 이런식으로 쉽게 중복 제거할 수 있다.
 * 근데 다른 사람의 풀이를 보니, 결국 두 수의 조합만 구하는거라면 이중 for문으로도 구할 수 있었다.
 * => 문제 조건이 두 수의 경우의 수라면, 조합 함수보다 이중 for문으로 구하는게 시간/공간 복잡도 측면에서 효율적이다.
 * (조합 함수는 재귀라서 O(n**2)의 시간 이상이 소요. 이중 for문은 O(n**2) 시간이 소요.)
 */
