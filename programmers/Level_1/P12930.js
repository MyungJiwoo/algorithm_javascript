// P12930: 이상한 문자 만들기
function solution(s) {
  const words = s.toUpperCase().split(" ");
  return words
    .map((word) => {
      const trans = [...word].reduce((acc, cur, idx) => {
        idx % 2 == 1 ? acc.push(cur.toLowerCase()) : acc.push(cur);
        return acc;
      }, []);
      return trans.join("");
    })
    .join(" ");
}

console.log(solution("try hello world"));

/**
 * 각 단어의 짝수번쨰 알파벳은 대문자로, 홀수번쨰 알파벳은 소문자로 바꾼 문자열을 리턴
 */

/**
 * 나는 reduce로 문자 하나를 순회하면서 문자의 대소문자를 바꿨다. 다른사람의 풀이를 보니 map을 중첩으로 이어서 하는 경우도 있다.
 * return s.split(" ").map(i => i.split("").map((j, key) => key % 2 === 0 ? j.toUpperCase() : j).join("")).join(" ")
 * => reduce 사용했을 때보다 가독성이 좋은 것 같다.
 */
