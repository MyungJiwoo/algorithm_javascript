// P181928: 이어 붙인 수
function solution(num_list) {
  let strOdd = ""; // 홀수만
  let strEven = ""; // 짝수만

  num_list.map((num) => {
    if (num % 2 !== 0) strOdd += num;
    else strEven += num;
  });

  return +strOdd + +strEven;
}

console.log(solution([3, 4, 5, 2, 1]));

/*
다른 사람이 쓴 코드

const { odds, evens } = num_list.reduce(({ odds, evens }, num) => {
        if (num % 2 === 0) {
            evens.push(num)
        } else {
            odds.push(num)
        }
        return { odds, evens }
    }, { odds: [], evens: [] })
*/
