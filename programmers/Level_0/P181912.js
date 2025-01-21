// P181912: 배열 만들기 5
function solution(intStrs, k, s, l) {
  const intArr = intStrs.map((str) => {
    return Number(str.substr(s, l));
  });
  return intArr.filter((num) => num > k);
}

console.log(
  solution(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5)
);
