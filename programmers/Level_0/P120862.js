// P120862: 최댓값 만들기 (2)

function solution(numbers) {
  if (numbers.length < 3) return numbers.pop() * numbers.pop();
  numbers.sort((a, b) => Math.abs(b) - Math.abs(a));

  const positiveNumbers = [];
  const negativeNumbers = [];
  for (let num of numbers) {
    if (num > 0) positiveNumbers.push(num);
    else if (num < 0) negativeNumbers.push(num);
  }

  const positiveNumberMultiply =
    positiveNumbers.shift() * positiveNumbers.shift() || 0;
  const negativeNumbersMultiply =
    negativeNumbers.shift() * negativeNumbers.shift() || 0;

  if (positiveNumberMultiply > negativeNumbersMultiply)
    return positiveNumberMultiply;
  else return negativeNumbersMultiply;
}

// console.log(solution([0, -31, 24, 10, 1, 9]));
console.log(solution([1, -2]));

/**
 * numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값 return (음수, 0, 정수 모두 포함됨)
 * - 절대값으로 나열하고
 * - 마지막 숫자의 부호를 보고 곱했을때 마지막이면 그 하나 앞...의 값을 곱하기
 * - 마지막 숫자의 부호와 같은 값들로 filter를 해서 마지막 값을 곱하기
 *  -> [실패] 이렇게 되면 배열이 없을때를 고려해야 함..
 * - 0은 패스 (미리 뺄까?)
 *  -> [실패?] 공정이 너무 많아지는듯
 * - 그냥 정렬한 배열 거꾸로 순회하면서 양수면 바로 리턴하는게 나을듯
 *  -> [실패] 절대값으로 가장 큰 값이 한 개 있는 음수라면 뭘 곱해도 음수라서 안된다...
 * - 양수/음수 배열로 나눠서 더 큰 값을 비교?
 */

/**
 * numbers는 원본 배열이 바뀐다.
 * 배열 - 맨 앞에 추가 : unshift / 맨 앞에 제거 : shift
 */

/**
 * 다른 사람의 풀이를 보니 최댓값을 구하는 부분을 Math.max()로도 쉽게 풀 수 있다.
 * 단순 정렬만 하고, Math.max(numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2]);
 */
