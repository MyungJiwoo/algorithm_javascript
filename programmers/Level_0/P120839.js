// P120839: 가위 바위 보
function solution(rsp) {
  return [...rsp]
    .map((user) => {
      switch (user) {
        case "0":
          return "5";
        case "2":
          return "0";
        case "5":
          return "2";
      }
    })
    .join("");
}

console.log(solution("205"));

/**
 * switch문을 사용해서 풀었는데 그냥 객체 매핑이 더 간단하고 좋은 방법인 것 같다.
 * ```
 * let arr = {
 *   2: 0,
 *   0: 5,
 *   5: 2
 * };
 * ```
 */
