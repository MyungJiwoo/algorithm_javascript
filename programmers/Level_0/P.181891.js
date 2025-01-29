// P181891: 순서 바꾸기
function solution(num_list, n) {
  const backArr = num_list.slice(n);
  const fristArr = num_list.slice(0, n);
  return backArr.concat(fristArr);
}

console.log(solution([5, 2, 1, 7, 5], 3));
