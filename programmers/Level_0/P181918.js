// P181918: 배열 만들기 4
function solution(arr) {
  const stk = [];
  let i = 0;

  while (i < arr.length) {
    if (stk.length == 0 || stk.at(-1) < arr[i]) {
      stk.push(arr[i]);
      i += 1;
    } else stk.pop();
  }

  return stk;
}

console.log(solution([1, 4, 2, 5, 3]));
