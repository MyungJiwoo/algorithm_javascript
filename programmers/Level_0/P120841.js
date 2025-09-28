// P120841: 점의 위치 구하기
function solution(dot) {
  const [x, y] = dot;

  if (x > 0 && y > 0) return 1;
  else if (x < 0 && y > 0) return 2;
  else if (x < 0 && y < 0) return 3;
  else return 4;
}

console.log(solution([2, 4]));
console.log(solution([-7, 9]));

/**
 * 주어진 좌표가 사분면의 어디에 속하는지 구해라가 문제.
 * 일반적으로 마이너스 부호 자체로 비교하는 방법 말고 사칙연산의 결과로 방법이 없을까..
 * => 없는 것 같음..
 *
 * 오랜만에 문제를 풀어서 그런지 if문 말고는 잘 안떠오른다..ㅎ
 * 다른 사람의 풀이를 보니,
 * ```
 * const check = num * num2 > 0;
 * return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
 * ```
 * 이렇게 사칙연산이랑 if를 섞어서 썼다.
 * 코드가 짧고 사칙연산으로 접근한게 신기하긴한데 개인적으로 가독성이 좋은 코드는 아닌 것 같다.
 */
