// P120892: 암호해독
function solution(cipher, code) {
  return [...cipher].filter((_, i) => (i + 1) % code == 0).join("");
}

console.log(solution("dfjardstddetckdaccccdegk", 4));

/**
 * 주어진 code의 배수만 유효한 문자라는건 반복문의 step으로 사용하라는 걸로 해석했다.
 * for도 가능한데 예전 코테에서 봤던 filter로 푸는 방법이 생각났다. (까먹고 있다가 찾아봄...)
 * step으로 사용하고 싶은 수를 현재 인덱스에서 나머지로 나눴을때 0이라면 step 반복이다.
 * 다만 이번 문제에서 조심해야 할 점은 문제상 "4번째"라서 인덱스에 +1을 해줘야 했다.
 * `arr.filter(i => i % 2 !== 0)` <- step=2씩 반복
 */
