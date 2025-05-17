// P120908: 문자열 안에 문자열

function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

console.log(solution("ab6CDE443fgh22iJKlmn1o", "6CD"));

/* 다른 사람의 풀이
return str1.split(str2).length > 1 ? 1 : 2  <- split으로도 할 수 있다.
*/
