// P181900: 글자 지우기
function solution(my_string, indices) {
  return [...my_string].filter((_, index) => !indices.includes(index)).join("");
}

console.log(solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3]));
