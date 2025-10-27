// P12928: 약수의 합
function solution(n) {
  const factorsSet = new Set();

  if (n == 1) return 1;

  let i = 0;
  while (i < n / 2) {
    if (n % i === 0) {
      factorsSet.add(i);
      factorsSet.add(n / i);
    }
    i++;
  }

  const factorsArray = Array.from(factorsSet);
  return factorsArray.reduce((acc, num) => acc + num, 0);
}

console.log(solution(1));

/**
 * 약수 구하기... 수학적이야..^^ 이런건 제대로 된 풀이를 배워서 암기해야(혹은 매우 익숙해져야) 하나 싶다.
 *
 * 테스트 1번이 틀리다고 나오는데 뭘까... 뭐가 예외일까...
 * -> 뭔가 1일거 같음.
 * -> 지금은 1을 넣으면 0이 반환됨. 근데 1의 약수는 1뿐이다.
 * -> 역시 이게 맞았으
 */

/**
 * 열심히 약수를 구했는데.. 다른 사람의 풀이를 보니 머리를 한 대 맞은 기분...ㅎㅎ
 * 약수라는 단어에 꽂혀서 구했는데, 사실 그냥 for문을 돌면서 나머지가 0일때를 더해주면 되는거였다^^
 *
 * function solution(num) {
 *   let sum = 0;
 *   for (let i = 1; i <= num; i++) {
 *       if (num % i === 0) sum += i
 *   }
 *   return sum
 * }
 */
