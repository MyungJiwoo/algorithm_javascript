// P12922: 수박수박수박수박수박수?
function solution(n) {
  return "수박".repeat(n / 2) + "수".repeat(n % 2);
}

console.log(solution(100));

/**
 * 길이가 n인 "수박수박수..." 패턴을 유지하는 문자열을 리턴
 */

/**
 * repeat()을 쓰고 싶었는데 그냥 while 이런걸로 해야하나..
 * => 결국 "수"아니면 "박"으로 끝나니까 홀수라면 "수"로 끝나게 반복하면 되겠네!
 */
