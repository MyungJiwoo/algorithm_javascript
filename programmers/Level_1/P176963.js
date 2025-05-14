// P176963: 추억 점수

function solution(name, yearnings, photos) {
  // 이름-추억점수 매핑 객체
  // const NAME_TO_YEARNING = {};
  // name.map((_, index) => (NAME_TO_YEARNING[name[index]] = yearnings[index]));

  const answer = photos.map((photo) =>
    photo.reduce((acc, cur) => acc + (yearnings[name.indexOf(cur)] || 0), 0)
  );

  return answer;
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
);

/* 
  [첫 접근]
  추억 점수 매칭이면 그냥 상수 객체 만들어서 매핑하면 되는거 아닌가? 
*/

/*
  [version 1]
  + {이름: 추억 점수} 매핑 객체가 있다고 가정
  const answer = photos.map((photo) => {
    let score = 0;
    photo.forEach((name) => {
      score += NAME_TO_YEARNING[name] || 0;
    });
    return score;
  });
  => version 2 이전에 테스트용

  [version 2]
  + {이름: 추억 점수} 매핑 객체가 있다고 가정
  const answer = photos.map((photo) =>
    photo.reduce((acc, cur) => acc + (NAME_TO_YEARNING[cur] || 0), 0)
  );
  => `|| 0`과 reduce 초기값 `0`으로 안정성 확보
  - 확실히 version 3보다 속도가 빠르다. case 10~12에서도 0.61~0.77ms로 약 2~4배 정도 차이난다.

  [version 3]
  const answer = photos.map((photo) =>
    photo.reduce((acc, cur) => acc + (yearnings[name.indexOf(cur)] || 0), 0)
  );
  => 생각해보니 매핑 객체도 결국 index 기반이니 생략해도 될 것 같았다. 그래서 이렇게 구현. (단, 이 방법은 무조건 이름과 추억 점수가 같은 인덱스라는 보장이 있어야 한다.)
  - 근데 이 방식은 case 10~12에서 2.34~4.32ms로 시간이 오래 걸린다.
*/
