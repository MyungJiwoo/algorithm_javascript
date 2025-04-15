// P120849: 모음 제거
function solution(my_string) {
  const answer = my_string.replace(/a|e|i|o|u/g, "");
  return answer;
}

// ! 정규식에서 |으로 or을 사용했고, /g 옵션으로 모든 패턴을 골랐다. 그리고 replaceAll()이 아님에 주의.

console.log(solution("bus"));
console.log(solution("nice to meet you"));
