// P181944: 홀짝 구분하기

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
  rl.close();
}).on("close", function () {
  {
    Number(input[0]) % 2 == 0
      ? console.log(`${input[0]} is even`)
      : console.log(`${input[0]} is odd`);
  }
});
