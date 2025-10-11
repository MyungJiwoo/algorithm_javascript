// P120837: 개미 군단
function solution(hp) {
  const ants = [5, 3, 1];
  let count = 0;

  ants.map((ant) => {
    count += Math.floor(hp / ant);
    hp -= Math.floor(hp / ant) * ant;
  });

  return count;
}

console.log(solution(999));

/**
 * 문제를 보자마자 greedy 알고리즘이 생각났다.
 * 개미 군단의 병력은 고정값이라 ants라는 상수를 만들어서 계산했다.
 */
