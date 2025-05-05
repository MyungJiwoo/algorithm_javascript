// P120854: 배열 원소의 길이

function solution(strlist) {
  return strlist.map((str) => {
    return str.length;
  });
}

console.log(solution(["We", "are", "the", "world!"]));
