// P181926: 수 조작하기 1
function solution(n, control) {
  const mapping = {
    w: 1,
    s: -1,
    d: 10,
    a: -10,
  };

  [...control].map((letter) => {
    n += mapping[letter];
  });

  return n;
}

console.log(solution(0, "wsdawsdassw"));

/*
"w" : n이 1 커집니다.
"s" : n이 1 작아집니다.
"d" : n이 10 커집니다.
"a" : n이 10 작아집니다.
*/
