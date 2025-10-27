// P120895: 인덱스 바꾸기

function solution(my_string, num1, num2) {
  // 1) 내가 쓴 풀이
  // const myStringArray = [...my_string];
  // let [str1, str2] = [my_string[num1], my_string[num2]];

  // myStringArray.splice(num1, 1, str2);
  // myStringArray.splice(num2, 1, str1);

  // return myStringArray.join("");

  // 2) 다른 사람의 풀이
  const myStringArray = [...my_string];
  [myStringArray[num1], myStringArray[num2]] = [
    myStringArray[num2],
    myStringArray[num1],
  ];
  return myStringArray.join("");
}

console.log(solution("hello", 1, 2));

/**
 * 두 요소의 인덱스만 바꾼다 했을때 새롭게 구조분해 할당을 써보면 어떨까 싶었다.
 * -> 근데 이거는 다른 요소까지는 변경할 수 없어서 잘 안될거 같기도...
 *
 * 배열로 바꿔서 splice?
 * -> 다른 사람의 풀이를 보니 그냥 배열로 바꿔서 구조분해 하면 되는거였다....
 * -> 조금만 더 생각해볼껄 ㅠㅠ
 */
