// P120823: 직각삼각형 출력하기

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  const num = Number(input[0]);
  for (let i = 0; i < num; i++) {
    console.log("*".repeat(i + 1));
  }
});

/**
 * js에서 입출력을 풀어내야 해서 어색했다.
 * 내가 따로 입출력을 제한하는건 아니고 입력받은 input[0]을 사용하기만 하면 됐다.
 * 별찍기 문제 오랜만에 풀었는데 repeat()을 쓰니까 중첩 반복문을 사용하지 않고도 풀 수 있었다.
 */
