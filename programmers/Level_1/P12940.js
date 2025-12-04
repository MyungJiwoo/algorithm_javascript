// P12940: 최대공약수와 최대공배수
const GCD = (x, y) => {
  const r = x % y;
  if (r == 0) return y;
  return GCD(y, r);
};

function solution(n, m) {
  const gcd = GCD(n, m);
  const lcm = (n * m) / gcd;
  return [gcd, lcm];
}

console.log("============ case 1 =============");
console.log(solution(3, 12));
console.log("============ case 2 =============");
console.log(solution(1, 10));

/**
 * 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 배열로 반환하는 함수
 */

/**
 * 수학적으로 방법이 있을 것 같아서 검색했다. => 유클리드 호제법
 * 1) 최대공약수 : x, y의 최대공약수는 y, r(x%y)의 최대공약수와 같다.
 * 2) 최소공배수 : 두 자연수의 곱 / 최대 공약수
 *
 * 결국 최대공약수를 구하는 것이 관건이다. 이때 유클리드 호제법으로 구할 수 있다.
 * x % y = r이라는 포맷에, 계속해서 x에는 y를 대입하고 y에는 r을 대입하다가, r이 0이 될 때 y가 최대 공약수이다.
 * => https://velog.io/@soyeon207/%EC%B5%9C%EB%8C%80%EA%B3%B5%EC%95%BD%EC%88%98GCD-%EC%B5%9C%EC%86%8C%EA%B3%B5%EB%B0%B0%EC%88%98LCM-%EA%B3%BC-%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98Euclidean-algorithm
 */
