// P160586: 대충 만든 자판

// hasKey() : 주어진 문자열을 모두 입력할 수 있는지 boolean형으로 반환
const hasKey = (keymap, target) => {
  const allKeys = keymap.join("");
  const keysSet = new Set([...allKeys]);
  const targetSet = new Set([...target]);
  const difference = new Set([...targetSet].filter((x) => !keysSet.has(x)));

  return difference.size > 0;
};

// getKeyPressCount() : 자판을 통해 몇 번 눌렀는지 number형로 반환
const getKeyPressCount = (target, keymap) => {
  const keysIndex = keymap.map((key) => {
    const index = key.indexOf(target);
    if (index == -1) return Infinity;
    else return index;
  });

  return Math.min(...keysIndex) + 1;
};

function solution(keymap, targets) {
  const answer = targets.map((target) => {
    if (hasKey(keymap, target)) {
      return -1;
    } else {
      const totalKeyPresses = [...target].reduce((keyPressSum, value) => {
        const keyPressCount = getKeyPressCount(value, keymap);
        return keyPressSum + keyPressCount;
      }, 0);

      return totalKeyPresses;
    }
  });

  return answer;
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])); // [9, 4] = [1+1+2+5, 1+1+1+1]
console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"])); // [4, 6] = [1+2+1, 1+2+3]

/** #5 문제 풀었다! 풀이 정리
 * (1) 입력할 때 필요한 자판이 보장되지 않는다고?
 *     Set을 통해 집합으로 계산했다.
 *     주어진 모든 자판을 하나의 집합으로 변환해서 메시지도 집합으로 변환해서 차집합을 했다.
 *     만약 차집합 했을 때 하나라도 값이 있다면 입력할 수 없는 키가 있다는 것이니 바로 입력을 그만두도록 -1을 반환했다.
 *
 * (2) 필요한 자판이 모두 있다면?
 *     여러 개의 자판에 중복된 키가 있을 수 있다. 그래서 최소 횟수를 구해야 한다.
 *     그래서 각 키마다 현재 입력할 문자에 해당하는 인덱스를(= 키를 몇 번 눌렀는지) 모두 계산해서 배열로 저장한다.
 *     이후 Math.min()을 통해 최소 입력 횟수를 구하고 반환한다.
 *     키가 눌린 횟수를 모두 더한다. 이 과정을 메시지의 각 문자에 적용해서 키를 누른 총 횟수를 구한다.
 */

/** #4
 * 문제를 잘못 이해했다.
 * 항상 첫 번째 버튼이 아니었다. = keymap에 주어진 각 key들의 순서가 바뀌지 않는다.
 * 나는 누른만큼 key들의 순서가 맨 뒤로 FIFO 되어야 하는 줄 알았는데... 아 너무 어렵게 생각했네..
 */

/** #3
 * ABACD / BCEFD => A
 * 1번에서 1번 누름
 * ABACD / BCEFD => B
 * 2번에서 1번 누름
 * ABACD / BCEFD => C
 * 2번에서 2번 누름
 * ABACD / CEFDB => D
 * 2번에서 4번 누름
 * ABACD
 */

/** #2
 * ASA에서, AGZ를 봤을때 A가 있어. (include)
 * 그러면 그 인덱스를 꺼내
 * 그리고 해당 키 앞에 있던걸 잘라서 다시 뒤로 붙여 (ex. ABCD에서 C키를 눌렀다면 indexOf+1로 3번 누른거 알아채고, AB는 잘라서 맨 뒤에 붙이기)
 * 문제는 min 값이어야 함. 그러면 모든 키들의 indexOf를 다 해봐야할 것 같은데
 * map으로 [indexOf, indexOf, indexOf] 이런식으로 해서 min하고, 그 min인 인덱스를 골라서 순서 변경(앞에 잘라 뒤에 붙이기)을 해야 하나?
 * 결국 최솟값 찾고도 indexOf...? 와 너무 시간 오래 걸릴거 같은데
 *
 * 이것도 아닌듯.. indexOf의 지옥...
 */

/** #1
 * 문제를 읽고 : 어렵다.
 * 만약 key1과 key2를 오가는 경우 마지막으로 누른 자판부터 다시 세기 때문에 인덱스를 기억해야겠다.
 * 근데 키가 몇개일지 모르니까 선언도 못해두겠네. <- 이게 너무 변수다.
 * FIFO인 큐를 써볼까?
 * 존재하는지 알아보는걸 집합을 할까? 각각 include하려면 시간이 너무 오래 걸릴듯
 */
