// P181915: 글자 이어 붙여 문자열 만들기
function solution(my_string, index_list) {
  return index_list
    .map((idx) => {
      return my_string[idx];
    })
    .join("");
}

console.log(
  solution("cvsgiorszzzmrpaqpe", [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7])
);
