// P181936: 공배수
function solution(num, n, m) {
  return num % n === 0 && num % m === 0 ? 1 : 0;
  // return num % (n * m) ? 1 : 0; => test2만 성공.
}

console.log(solution(8, 2, 4));

/*
num % (n * m) === 0 ? 1 : 0; 은 test2만 실패하고
num % (n * m) ? 1 : 0; 은 test2만 성공함. (???)

그냥 &&로 연결하니까 성공함.

n*m으로 계산하는게 안됐던 이유는 (num = 4, n = 4, m = 2)와 같은 경우!
즉 n*m이 최소 공배수가 되지 않을 수 있다는 점.
n과 m이 서로소가 아닌 경우 n*m은 최소공배수보다 클 수 있다는 예외가 있다.
그래서 무조건 &&로 연결해야 한다.
*/
