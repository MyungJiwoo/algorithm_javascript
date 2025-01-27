// P181897: 리스트 자르기
function solution(n, slicer, num_list) {
  const [a, b, c] = slicer;

  switch (n) {
    case 1:
      return num_list.slice(0, b + 1);
    case 2:
      return num_list.slice(a);
    case 3:
      return num_list.slice(a, b + 1);
    case 4:
      return num_list.slice(a, b + 1).filter((_, index) => index % c === 0);
  }
}

console.log(solution(4, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]));

/*
n은 1~4의 범위로 존재.
n = 1 : num_list의 0번 인덱스부터 b번 인덱스까지
n = 2 : num_list의 a번 인덱스부터 마지막 인덱스까지
n = 3 : num_list의 a번 인덱스부터 b번 인덱스까지
n = 4 : num_list의 a번 인덱스부터 b번 인덱스까지 c 간격으로
*/
