// P181925: 수 조작하기 2
function solution(numLog) {
  let answer = "";

  numLog.reduce((acc, cur) => {
    switch (cur - acc) {
      case 1:
        answer += "w";
        return cur;
      case -1:
        answer += "s";
        return cur;
      case 10:
        answer += "d";
        return cur;
      case -10:
        answer += "a";
        return cur;
    }
  });

  return answer;
}

console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]));

/*
"w" : 수에 1을 더한다.
"s" : 수에 1을 뺀다.
"d" : 수에 10을 더한다.
"a" : 수에 10을 뺀다.
*/
