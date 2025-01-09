// P181942: 문자열 섞기

function solution(str1, str2) {
  let answer = "";

  for (let i = 0; i < str1.length; i++) {
    answer += str1[i];
    answer += str2[i];
  }

  return answer;
  // return [...str1].map((x, idx)=> x+str2[idx]).join(""); => 다른 사람이 쓴 풀이
}

console.log(solution("aaaaa", "bbbbb"));
