// P147355: 크기가 작은 부분 문자열
function solution(t, p) {
  const p_length = p.length;

  let count = 0;
  for (const idx in t) {
    const num = t.substr(idx, p_length);
    if (num <= +p && num.length === p_length) {
      count += 1;
    }
  }

  return count;
}

console.log(solution("3141592", "271"));
console.log(solution("500220839878", "7"));
console.log(solution("10203", "15"));

/** 풀이 접근
 * 1. p로 주어진 길이만큼 p에서 모든 경우의 수를 따져야 한다.
 * 2. slice로 t의 인덱스 0부터 p의 길이만큼 자르면서 숫자로 바꿔서 비교를 하자.
 * 3. 어쨋든 작거나 같은 것이 나오는 횟수만 리턴한다. = slice를 시작하는 첫 숫자가 p의 첫 숫자보다 크면 비교할 필요가 없다.
 */

/* 알게된 것
- for...in문에서 index를 역할하는 변수는 항상 string으로 처리된다.
- 문자열 slice()를 하니 원하는 값이 안나옴.
 */

/** 처음 제출하고 오답이었던 코드
 * 원인 : p의 첫 시작보다 작으면 무조건 count+1을 해서 (첫 if문) p의 길이만큼 자릿수가 아니더라도 무조건 count가 되어 답이 틀림.
function solution(t, p) {
  const p_length = p.length;

  let count = 0;
  for (const idx in t) {
    if (+t[idx] < +p[0]) {
      count += 1;
      console.log(t.substr(idx, p_length));
    }
    if (+t[idx] == +p[0]) {

      if (num <= Number(p) && num.length === p_length) {
        count += 1;
      }
    }
  }

  return count;
}
 */

/**
 * 아무튼 관건이었던 건, 숫자 비교뿐 아니라 자릿수가 p의 자릿수와도 같은지!
 */
