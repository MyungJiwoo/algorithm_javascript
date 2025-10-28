// P120897: 약수 구하기

function solution(n) {
  // 1. 모두 순회하는 방법
  const factors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) factors.push(i);
  }
  return factors;

  // 2. 절반만 순회하는 방법
  // if (n == 1) return [1];
  // const factorsSet = new Set();
  // for (let i = 1; i < n / 2; i++) {
  //   if (n % i == 0) {
  //     factorsSet.add(i);
  //     factorsSet.add(n / i);
  //   }
  // }
  // return Array.from(factorsSet).sort((a, b) => a - b);
}

console.log(solution(24));

/**
 * 약수 구하려면 for문을 활용하자는걸 어제 배웠기 때문에 그대로 도전
 * -> 금방 통과했다
 *
 * 절반만 순회하는 방법도 다시 한 번 도전했는데, n==1일때 꼭 예외처리 해주기!
 *
 * 그리고 1, 2번 방법을 시간복잡도 측면에서 비교했는데,
 * 1번은 모든 요소를 순회하므로 O(n)이고,
 * 2번은 절반 정도만 해도 되니까  O(√n)이라 이 방법이 더 효과적이라고 한다.
 * (사실 n/2이 아니라 √n까지만 순회하면 돼서 Math.sqrt(n)으로 줄이는게 낫다고 한다.)
 */
