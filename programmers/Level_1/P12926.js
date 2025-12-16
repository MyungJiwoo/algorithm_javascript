// P12926: 시저 암호
function solution(s, n) {
  const splitChar = s.split("");
  const codeArr = splitChar.map((char) => {
    if (char === " ") return char;

    const CaesarCipher = char.charCodeAt() + n;
    if (char.toLowerCase() === char) {
      return String.fromCharCode(((CaesarCipher - 97) % 26) + 97);
    } else {
      return String.fromCharCode(((CaesarCipher - 65) % 26) + 65);
    }
  });

  return codeArr.join("");
}

console.log(solution("AB", 1));
console.log(solution("z", 1));
console.log(solution("Z", 1));
console.log(solution("a B z", 1));

/**
 * 시저 암호: 각 알파벳의 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식
 * "z" + 1 = "a". 공백은 밀어도 공백.
 */

/**
const shiftChar = (char, n) => {
  if (char === " ") return char;

  const code = char.charCodeAt(0);
  const base = code >= 97 ? 97 : 65;

  return String.fromCharCode(((code - base + n) % 26) + base);
};

function solution(s, n) {
  return [...s].map((c) => shiftChar(c, n)).join("");
}
  ==> 위 코드는 현재 내 코드를 gpt가 중복을 줄이도록 바꿔준 것이다.
  z+1=a, Z+1=A의 공식은 `(code - base + n) % 26) + base`이 맞다.
*/
