// P181913: 문자열 여러 번 뒤집기

function solution(my_string, queries) {
  my_string = my_string.split("");

  queries.map((query) => {
    const [start, end] = query;
    sliceStr = my_string.slice(start, end + 1);
    my_string.splice(start, end - start + 1, ...sliceStr.reverse());
  });

  return my_string.join("");
}

console.log(
  solution("rermgorpsam", [
    [2, 3],
    [0, 7],
    [5, 9],
    [6, 10],
  ])
);
