// P181834: L로 만들기
function solution(myString) {
  return myString.replace(/[a-k]/g, "l");
}

console.log(solution("abcdevwxyz"));

/**
 * 알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾸기
 * - l보다 앞 순서인 문자를 찾는다
 * - 문자들을 모두 l로 바꾼다
 */

/**
 * 고민 : a~k까지는 고정인데 이걸 꼭 하나씩 찾아야 하는가?
 * 방법은 2개가 있겠지. 1번은 모든 문자를 하나씩 돌면서 l보다 앞서있다면(CharAt 등으로) 바꾸는거고,
 * 2번은 a~k를 모두 상수화(혹은 정규식)해서 replace하고.
 */

/**
 * 나는 정규식 + replaceAll로 풀었는데, 다른 사람의 풀이도 똑같았다!
 * 그리고 문자 자체로 비교해도 된다는걸 알았다. (charAt 없이) ex. char > 'i' 이런식으로
 */
