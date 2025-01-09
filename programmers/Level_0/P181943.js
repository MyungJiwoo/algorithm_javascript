// P181943: 문자열 겹쳐쓰기

function solution(my_string, overwrite_string, s) {
  const restartPoint = overwrite_string.length + s;

  return (
    my_string.substring(0, s) +
    overwrite_string +
    my_string.substring(restartPoint)
  );
}

console.log(solution("He11oWor1d", "lloWorl", 2));
console.log(solution("Program29b8UYP", "merS123", 7));
