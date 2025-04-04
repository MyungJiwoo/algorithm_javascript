// P181919: 콜라츠 수열 만들기
function solution(n) {
  const answer = [];

  while (n !== 1) {
    answer.push(n);
    if (n % 2 == 0) n /= 2;
    else n = 3 * n + 1;
  }

  answer.push(1);

  return answer;
}

console.log(solution(10));
