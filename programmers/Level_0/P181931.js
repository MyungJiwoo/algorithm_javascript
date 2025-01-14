function solution(a, d, included) {
  let sum = 0;

  included.map((boolean, index) => {
    if (boolean === true) sum += a + d * index;
  });

  return sum;
}

console.log(solution(3, 4, [true, false, false, true, true]));
