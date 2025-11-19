// P82612: 부족한 금액 계산하기
function solution(price, money, count) {
  const priceArr = Array.from({ length: count }, (_, i) => (i + 1) * price);
  const totalPrice = priceArr.reduce((acc, cur) => acc + cur, 0);
  return totalPrice > money ? totalPrice - money : 0;
}

console.log(solution(3, 20, 4));

/**
 * 놀이기구의 원래 이용료는 price이고, 놀이기구를 N번 째 이용한다면 원래 이용료의 N배를 받는다.
 */

/**
 * 다른 사람의 풀이를 보니 가우스 공식을 사용했다.
 * => price * count * (count + 1) / 2
 *
 * 사실 풀면서도 고민했지만 내가 쓴 풀이는 효율적인 코드는 아니다. 메서드를 연습하기 위한 용도였다.
 * 효율을 생각한다면 일반 반복문을 썼을 것 같다. (가우스 공식은...ㅠ)
 */
