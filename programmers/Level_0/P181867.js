// P181867: x 사이의 개수
function solution(myString) {
  return myString.split("x").map((item) => item.length);
}

console.log(solution("oxooxoxxox"));

/**
 * 주어진 문자열을 "x" 기준으로 나눴을 때 나눠진 문자열 각각의 길이를 순서대로 저장한 배열 리턴
 * x 기준으로 split한 다음에 길이 반환하기
 */
