// P181861: 배열의 원소만큼 추가하기
function solution(arr) {
  let answer = [];
  arr.map((num) => {
    for (let i = 0; i < num; i++) answer.push(num);
  });
  return answer;
}

console.log(solution([3, 2, 1, 4, 10]));

/**
 * arr.map((num) => (answer += String(num).repeat(num)));
 * return [...answer].map(Number);
 *
 * 처음에는 이런식으로 문제를 풀었는데, 코드 실행할 때는 다 맞고 채점할때는 거의 다 틀렸다.
 * 아무리 고민해도 잘 푼 것 같은데 왜 통과 못하는지 궁금해서 다른 사람이 질문한 내용을 보니까 두자리수 숫자부터는 반례가 생겼다.
 * 지금 내 코드로는 10을 반복하더라도 1, 0이 나눠져서 추가된다.
 */

/**
 * arr.map((num) => { for (let i = 0; i < num; i++) answer.push(num); });
 * 그냥 이런식으로 원초적인 방법을 사용했다.. ㅎㅎ
 *
 * ---
 *
 * 문제 풀고 다른 사람 풀이를 보니 아래와 같이 선언적으로 풀 수 있었다.
 * return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
 * (1) new Array(num).fill(num)으로 원하는 만큼 배열 생성한 점
 * (2) reduce의 초기값을 배열로 잡고 push 대신 사용한 점
 * 두가지를 새롭게 배웠다.
 */
