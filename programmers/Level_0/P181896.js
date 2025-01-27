// P181896: 첫 번째로 나오는 음수
function solution(num_list) {
  const filtered = num_list.filter((num, index) => num < 0);
  return num_list.indexOf(filtered.shift());
}

console.log(solution([12, -4, 15, 46, 38, -2, 15]));
