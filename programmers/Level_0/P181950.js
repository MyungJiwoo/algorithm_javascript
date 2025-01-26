// P181950: 문자열 반복해서 출력하기

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
    const [str, n] = input;
    console.log(str.repeat(n));
});
