// P181911: 부분 문자열 이어 붙여 문자열 만들기
function solution(my_strings, parts) {
  return my_strings
    .map((str, index) => {
      return str.slice(parts[index][0], parts[index][1] + 1);
    })
    .join("");
}

console.log(
  solution(
    ["progressive", "hamburger", "hammer", "ahocorasick"],
    [
      [0, 4],
      [1, 2],
      [3, 5],
      [7, 7],
    ]
  )
);
