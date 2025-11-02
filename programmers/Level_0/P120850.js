// P120850: 문자열 정렬하기 (1)
function solution(my_string) {
  const numArray = [...my_string].filter((str) => !isNaN(str));
  return numArray.sort((a, b) => Number(a) - Number(b)).map((str) => +str);
}

console.log(solution("hi12392"));

/**
 * 연결된 배열/문자열 함수가 많지만 다른 사람 풀이를 봤을때 흐름은 비슷한 것 같다.
 * 차이점은 sort에서 Number 변환이 없었는데, 문제 특성상 0~9까지의 한 자릿수 숫자만 비교하면 되기 때문에 형변환을 하지 않았다.
 */
