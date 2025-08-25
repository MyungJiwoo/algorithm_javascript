// P120819: 아이스 아메리카노

const PRICE = 5500;

function solution(money) {
  return [Math.floor(money / PRICE), money % PRICE];
}

console.log(solution(5500));

/**
 * 아아 한 잔에 5500원. money가 주어질 때 최대로 마실 수 있는 커피 수와 잔돈을 순서대로 담은 배열 리턴
 * -> 배열로 리턴하면 구조분해할당으로 뭔가 한 번에 처리할 수 없을까?
 *
 * 문제 자체는 쉬웠고 다른 사람 풀이랑 비교했을 때 나는 가격을 상수로 처리했다는 거!
 */
