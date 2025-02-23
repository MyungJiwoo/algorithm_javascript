// P120829: 각도기
function solution(angle) {
  if (angle > 0 && angle < 90) return 1;
  if (angle == 90) return 2;
  if (angle > 90 && angle < 180) return 3;
  if (angle == 180) return 4;
}

// return [0, 90, 91, 180].filter(x => angle>=x).length;
// 다른 사람이 쓴 풀인데 어떻게 이게 답이 될 수 있는거지?
