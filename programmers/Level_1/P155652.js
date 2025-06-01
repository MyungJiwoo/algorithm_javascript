// P155652: 둘만의 암호

// [utf-16] a: 97 ~ z: 122

function solution(s, skip, index) {
  const allChars = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 97)
  );
  const filteredChars = allChars.filter((char) => ![...skip].includes(char));

  return [...s]
    .map(
      (char) =>
        filteredChars[
          (filteredChars.indexOf(char) + index) % filteredChars.length
        ]
    )
    .join("");
}

console.log(solution("aukks", "wbqd", 5));
console.log(solution("bcdefghijklmnopqrstuvwxyz", "a", 1)); // cdefghijklmnopqrstuvwxyzb

/**
 * #1 첫 접근
 * 글자를 유니코드로 바꿔서 인덱스를 더하자
 * skip은 어떻게 처리해야 할까?
 *
 * - charCodeAt() : char -> utf-16
 * - String.fromCharCode() : utf-16 -> char
 */

/**
 * #2 skip을 처리하는 방법이 어렵다.
 * 흠.. filter로 개수를 걸러내서 index에 더하기?
 * 
  function solution(s, skip, index) {
  const utfSkip = [...skip];

  return [...s]
    .map((str) => {
      const utfStr = str.charCodeAt();
      const skipCount = utfSkip.filter((skipStr) => {
        return (
          utfStr <= skipStr.charCodeAt() &&
          skipStr.charCodeAt() <= utfStr + index
        );
      });

      let newUtfStr = utfStr + index + skipCount.length;
      newUtfStr = newUtfStr > 122 ? newUtfStr - 26 : newUtfStr;
      console.log(newUtfStr);
      return String.fromCharCode(newUtfStr);
    })
    .join("");
}
    => 이렇게 하니까 happy 외에 모두 오답... 이유는 skip을 제대로 처리하지 못해서 인듯.
 */

/**
 * #3 skip이 빠진 배열을 만들자.
 * #3-1 처음 배열을 만들었을 때는 utf-16 코드를 넣어두어서 매칭할 때 고민을 많이 했고, 잘 안됐다.
 * #3-2 배열 인덱스로 불러와서 사용하려면 매핑할게 아니라, 주어진 코드가 몇 번째 인덱스인지 찾고 그 값에 +index로 구하면 됐다.
 *      하지만 배열 길이를 넘을 순 없으므로 % arr.length로 배열을 순회하도록 했다.
 *
 * 정답을 풀고 다른 사람의 코드를 보니 알파벳을 바로 선언해서 사용했다. 굳이 String.fromCharCode()를 하지 않아도 돼서 좋다.
 */
