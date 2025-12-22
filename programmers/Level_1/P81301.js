// P81301: 숫자 문자열과 영단어
const numberMap = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function solution(s) {
  let answer = s;
  for (let num in numberMap) {
    answer = answer.replaceAll(num, numberMap[num]);
  }
  return +answer;
}

console.log(solution("one4seveneight"));

/**
 * 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드르 건네주면 프로도는 원래 숫자로 찾는 게임
 * ex. 1478 -> "one4seveneight"
 * 원래 의미하는 숫자를 return
 */

/**
 * 내 접근 방식
 * - 주어진 숫자를 한 자릿수 기준으로 잘라서 영단어를 골라내기
 *  - 영단어가 이어붙어있는 경우?
 *     => replaceAll ??
 * - 각 영단어가 의미하는 숫자를 매핑하기
 * - 다 이어붙여서 반환
 */

/**
 * 내가 제출한 답안: replaceAll을 사용했다.
 */

/**
 * 다른 사람의 풀이를 보니,
``` 
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}
```
  * 위와 같이 replaceAll을 수동으로 구현한 느낌으로 풀었다.
  * 매핑객체 대신 배열의 인덱스를 이용했고, 각 문자열을 split으로 자른다. 그러면 split 대상은 없어지고, 해당 단어(숫자)가 포함된 자리를 기준으로 자리가 나눠진다.
  * 그리고 join으로 그 사이를 실제 숫자로 연결했다.
  * 
  * 하지만 replaceAll이 지원된지 오래되지 않아서, 일부 플랫폼에서는 사용하지 못할 수도 있다.
  * 그래서 replaceALl == split + join 방법을 익혀두는 것도 좋을듯!!
*/
