// P181946: 문자열 붙여서 출력하기

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  // input = line.replace(' ', "");
  [a, b] = line.split(" ");
}).on("close", function () {
  console.log(`${a}${b}`);
});
