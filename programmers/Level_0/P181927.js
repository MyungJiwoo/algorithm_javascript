// P181927: 마지막 두 원소
function solution(num_list) {
  const lastNum = num_list[num_list.length - 1];
  const secondLastNum = num_list[num_list.length - 2];

  lastNum > secondLastNum
    ? num_list.push(lastNum - secondLastNum)
    : num_list.push(lastNum * 2);

  return num_list;
}

console.log(solution([5, 2, 1, 7, 5]));
