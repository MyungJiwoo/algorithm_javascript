// P120893: 대문자와 소문자

function solution(my_string) {
  let answer = "";
  for (let char of my_string) {
    if (char === char.toUpperCase()) answer += char.toLowerCase();
    else answer += char.toUpperCase();
  }
  return answer;
}

console.log(solution("cccCCC"));

/**
 * 매일 헷갈리는 것.. for~of와 for~in의 차이점
 * - for~of : iterable을 순회하며 각 요소를 변수에 할당 => iterable 객체가 반복하도록 정의한 값을 반복
 * - for~in : 객체의 모든 property를 순회하며 열거 => 열거 가능한 properties를 임의의 순서로 반복
 */

/**
 * 다른 사람의 풀이를 보니 아래와 같이 단축해서 쓸 수도 있다.
 * `answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();`
 */
