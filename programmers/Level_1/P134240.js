// P134240: 푸드 파이트 대회
function solution(food) {
  let result = "";
  food.map((f, idx) => {
    if (idx == 0) return;

    result += `${idx}`.repeat(Math.floor(f / 2));
  });

  return result + "0" + [...result].reverse().join("");
}

console.log(solution([1, 3, 4, 6]));

/**
 * 주어진 배열에서 0은 물이고, 1번 인덱스부터 음식의 개수가 주어짐.
 * 중앙에 0을 두고 좌우대칭이 맞도록 음식을 나열해라.
 */

/**
 * 다른 사람 풀이를 보니 풀이 접근은 같았고, 나는 map을 썼지만 어차피 인덱스 1부터 시작하기 때문에 for을 쓴 사람도 있었다.
 */
