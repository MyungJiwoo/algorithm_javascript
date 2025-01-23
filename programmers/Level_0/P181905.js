// P181905: 문자열 뒤집기
function solution(my_string, s, e) {
  // 방법 1
  // const subMystring = my_string.substring(s, e + 1);
  // return my_string.replace(
  //   subMystring,
  //   subMystring.split("").reverse().join("")
  // );

  // 방법 2
  my_string = [...my_string];
  const reverseMyString = my_string.slice(s, e + 1).reverse();
  my_string.splice(s, e - s + 1, ...reverseMyString);
  return my_string.join("");
}

console.log(solution("Progra21Sremm3", 6, 12));
