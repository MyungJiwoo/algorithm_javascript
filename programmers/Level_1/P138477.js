// P138477: 명예의 전당 (1)

const sort = (array, item) => {
  let index = 0;
  while (item < array[index]) {
    index += 1;
  }
  array.splice(index, 0, item);
  return array;
};

function solution(k, scores) {
  const array = [];
  const answer = [];

  scores.map((score) => {
    sort(array, score);
    if (array.length <= k) answer.push(array.at(-1));
    else answer.push(array[k - 1]);
  });

  return answer;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));

/** 
 * 접근 방식 : 내림차순으로 나열하고 k인덱스를 찾자

function solution(k, scores) {
  var answer = [];
  scores.map((score, index) => {
    const sliceScores = scores.slice(0, index + 1);
    const sortedScores = sliceScores.sort((a, b) => b - a);
    if (sortedScores.length <= k) answer.push(sortedScores.at(-1));
    else answer.push(sortedScores[k - 1]);
  });
  return answer;
}
 * 문제점 => 시간이 너무 비효율적이다. sort에서 시간이 너무 오래 걸리는 것 같은데. 매번 새롭게 sort 하는게 아니라, 명예의 전당 배열을 만들고 순위를 기록하는 공간을 만들면? (누적되는 내림차순)
 */
