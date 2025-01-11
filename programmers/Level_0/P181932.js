// P181932: 코드 처리하기

function solution(code) {
  let ret = "";
  let mode0 = true;

  [...code].map((letter, index) => {
    if (letter === "1") {
      mode0 = !mode0;
    } else if (index % 2 === 0 && mode0) {
      ret += letter;
    } else if (index % 2 === 1 && !mode0) {
      ret += letter;
    }
  });

  return ret.length == 0 ? "EMPTY" : ret;
}

console.log(solution("abc1abc1abc"));

/*
- 앞에서부터 읽으면서 문자가 1이면 mode 바꿈 => 최종적으로 문자열 ret 만들어 반환
- mode : 0, 1
- 주어진 code 문자열을 하나씩 읽어나가면서 mode에 맞게 작업
- mode 0 : 현재 값이 "1"이 아니고, 현재 index가 짝수라면 ret 뒤에 현재 글자 추가 / "1"이면 모드 변경
- mode 1 : 현재 값이 "1"이 아니고, 현재 index가 홀수라면 ret 뒤에 현재 글자 추가 / "1"이면 모드 변경
- 시작 mode 0
- 반환할 문자열이 비었으면 "EMPTY" 반환
*/
