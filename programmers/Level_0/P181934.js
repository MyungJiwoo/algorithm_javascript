// P181934: 조건 문자열

function solution(ineq, eq, n, m) {
  let operator = ineq + eq;
  operator = operator.replace("!", "");

  return eval(`${n} ${operator} ${m}`) ? 1 : 0;
}

console.log(solution("<", "!", 60, 50));
