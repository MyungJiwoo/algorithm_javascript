// P181863: rny_string
function solution(rny_string) {
  return rny_string.replaceAll("m", "rn");
}

console.log(solution("masterpiece"));

/**
 * 주어진 문자열에서 "m"을 "rn"으로 모두 바꿔라.
 * => replaceAll 사용하기
 */
