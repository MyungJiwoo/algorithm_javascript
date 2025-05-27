// P120585: 머쓱이보다 키 큰 사람

function solution(array, height) {
  return array.filter((h) => h > height).length;
}

console.log(solution([149, 180, 192, 170], 167));

// 머쓱이보다 키카 더 큰 사람들을 filter() + filter 배열의 길이 == 머쓱이보다 키 큰 사람의 수
