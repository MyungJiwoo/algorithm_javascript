// P181949: 대소문자 바꿔서 출력하기

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
  rl.close();
}).on("close", function () {
  str = input[0];

  let answer = "";
  [...str].map((s) => {
    s.charCodeAt() > 96
      ? (answer += s.toUpperCase())
      : (answer += s.toLowerCase());
  });

  console.log(answer);
});

/*
const rl = readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", function (line) {
    let answer = "";
    [...line].map((s) => {
      s.charCodeAt() > 96
        ? (answer += s.toUpperCase())
        : (answer += s.toLowerCase());
    });

    console.log(answer);
  });

  * 분기 한 버전 => 코드는 간결해도 속도가 느리다.
*/
