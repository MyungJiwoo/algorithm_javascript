// P181908: 접미사인지 확인하기
function solution(my_string, is_suffix) {
  const suffixArr = [];

  [...my_string].map((str, idx) => suffixArr.push(my_string.slice(idx)));

  return suffixArr.includes(is_suffix) ? 1 : 0;
}

console.log(solution("banana", "ana"));
