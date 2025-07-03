// P120906: 자릿수 더하기

function solution(n) {
  return [...String(n)].reduce((acc, cur) => acc + Number(cur), 0);
}

console.log(solution(1234));

// 구조분해할당을 하지 않고 string으로 바꾸고 split()하여 새로운 배열을 만들 수도 있다.
