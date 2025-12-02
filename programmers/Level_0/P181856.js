// P181856: 배열 비교하기
function solution(arr1, arr2) {
  if (arr1.length > arr2.length) return 1;
  if (arr1.length < arr2.length) return -1;

  arr1Sum = arr1.reduce((acc, cur) => acc + cur, 0);
  arr2Sum = arr2.reduce((acc, cur) => acc + cur, 0);

  if (arr1Sum === arr2Sum) return 0;
  if (arr1Sum > arr2Sum) return 1;
  if (arr1Sum < arr2Sum) return -1;
}

console.log(solution([49, 13], [70, 11, 2]));

/**
 * 두 배열의 길이가 긴 쪽이 크다. / 길이가 같다면 모든 원소의 합이 더 큰 쪽이 크다.
 * arr1이 크다면 1, arr2가 크다면 -1, 같다면 0을 반환해라.
 */

/**
 * 다른 사람의 풀이를 봤는데 결국 if문 여러 개로 답을 반환하는 것은 같았다. 그래도 reduce 자체를 함수로 뺄 수도 있었다.
 */
