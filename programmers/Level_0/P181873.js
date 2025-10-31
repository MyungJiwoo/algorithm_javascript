// P181873: 특정한 문자를 대문자로 바꾸기
function solution(my_string, alp) {
  return my_string.split(alp).join(alp.toUpperCase());
}

console.log(solution("programmers", "p"));

/**
 * 영소문자 문자열(my_string)과 영소문자 1개(alp)가 주어질 때, 영소문자 1개에 해당하는 모든 글자를 대문자로 바꾸기
 * - [x] my_string에서 alp를 모두 찾아 대문자로 변경한다. (what)
 *
 * - [x] alp 기준으로 모두 split 한다. (how)
 * - [x] 대문자 alp로 join 한다. (how)
 */

/**
 * 다른 사람의 풀이를 보니, js의 기본 메서드를 간과했다.
 * split + join을 할 게 아니라, 간단하게 replaceAll()을 사용하면 됐다.
 * 요구사항 분석의 how에 꽂혀서 기초를 잊지 말자..!
 */
