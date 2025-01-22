// P181909: 접미사 배열
function solution(my_string) {
  const suffixArr = [];

  for (let i = 0; i < my_string.length; i++) {
    suffixArr.push(my_string.slice(i));
  }

  return suffixArr.sort();
}

console.log(solution("banana"));
console.log(solution("programmers"));
