// P120825: 문자 반복 출력하기

function solution(my_string, n) {
  let answer = "";
  for (let char of my_string) {
    answer += char.repeat(n);
  }
  return answer;
}

console.log(solution("hello", 3));

/**
 * my_string에 들어있는 각 문자를 n만큼 반복한 문자열 리턴
 * -> 문자열 반복 + repeat() 메소드
 *
 * 문자열을 순회하는 방법
 * 1. for~in : 순회는 가능하나, 순서 보장을 못 함 / 각 인덱스(key)를 반환
 * 2. for~of : 순서 보장하지 못하는 for~in의 문제점을 해결 / 각 문자를 반환 ==> String 순회에 적합
 * 3. [...str].map(() => {}) : 스프레드 연산자로 String을 Array로 바꿔서 순회
 */
