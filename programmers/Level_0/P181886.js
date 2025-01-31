// P181886: 5명씩
function solution(names) {
  return names.filter((_, index) => !(index % 5));
}

console.log(
  solution(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"])
);
