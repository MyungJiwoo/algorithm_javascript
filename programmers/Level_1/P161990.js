// P161990: 바탕화면 정리

function solution(wallpaper) {
  const xLine = [];
  const yLine = [];
  const NOT_FOUND_FILE = -1;

  wallpaper.forEach((line, index) => {
    const firstFile = line.indexOf("#");
    const lastFile = line.lastIndexOf("#");
    if (firstFile > NOT_FOUND_FILE) xLine.push(firstFile);
    if (lastFile > NOT_FOUND_FILE) xLine.push(lastFile);
    if (firstFile > NOT_FOUND_FILE || lastFile > NOT_FOUND_FILE)
      yLine.push(index);
  });

  return [
    Math.min(...yLine),
    Math.min(...xLine),
    Math.max(...yLine) + 1,
    Math.max(...xLine) + 1,
  ];
}

console.log(
  solution([
    ".##...##.",
    "#..#.#..#",
    "#...#...#",
    ".#.....#.",
    "..#...#..",
    "...#.#...",
    "....#....",
  ])
);

/**
 * 각 줄의 첫 #, 마지막 #의 위치를 알아냄
 * 모든 줄의 #에 대해 x, y 최소, x, y 최대를 구함
 */
