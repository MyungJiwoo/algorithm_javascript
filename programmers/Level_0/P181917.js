// P181917: 간단한 논리 연산
function solution(x1, x2, x3, x4) {
  return (x1 || x2) && (x3 || x4);
}

console.log(solution(false, true, true, true));

// (x1 ∨ x2) ∧ (x3 ∨ x4)
// ∨ : or / ∧ : and
