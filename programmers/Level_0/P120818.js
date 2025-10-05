// P120818: 옷가게 할인 받기
function solution(price) {
  if (500000 <= price) return Math.floor(price * 0.8);
  else if (300000 <= price) return Math.floor(price * 0.9);
  else if (100000 <= price) return Math.floor(price * 0.95);
  else return price;
}

console.log(solution(150000));

/** 10만원 이상 5%, 30만원 이상 10%, 50만원 이상 20% 할인
 * 소수점은 버리고 반환
 *
 * 매직 넘버를 신경쓰지 않고 풀었는데... 다른 사람 풀이보면 다 비슷한것 같다.
 */
