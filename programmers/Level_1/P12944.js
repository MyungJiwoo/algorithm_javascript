// P12944: 평균 구하기

function solution(arr) {
  return arr.reduce((acc, num) => acc + num, 0) / arr.length;
}

console.log(solution([1, 2, 3, 4]));

/**
 * 이제는 합계를 구할 때 reduce가 더 쉬워지긴 했다..ㅎㅎ
 */
