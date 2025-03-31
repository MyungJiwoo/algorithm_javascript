// 120830: 양꼬치

function solution(n, k) {
  k -= Math.floor(n / 10);
  return n * 12000 + k * 2000;
}

console.log(solution(10, 3));

// 양꼬치 10인분 -> 음료수 하나 서비스
// 양꼬치 12000원, 음료수 2000원
