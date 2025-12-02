// P12969: 직사각형 별찍기
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  for (let i = 0; i < b; i++) {
    console.log("*".repeat(a));
  }

  process.exit();
});

/**
 * 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력
 */

/**
 * 다른 사람의 풀이를 보니 똑같이 repeat을 사용했다.
 */

/**
 * process.stdin stream : 표준 입력 데이터를 읽기위해 사용되는 Node.js의 내장 stream.
 * - process.stdin.setEncoding('utf8'): 인코딩 방식
 * - process.stdin.on('data', data => {...}): 데이터를 수신할 때마다 호출되는 이벤트 리스너. 콜백함수로 넘겨지는 'data'인자는 수신받은 데이터를 담고 있는 버퍼 객체이다.
 * - process.stdout: 표준 출력 스트림
 * - process.exit(): 프로그램 종료
 */
