## algorithm_javascript

2025.01.06

- P181952: 문자열 출력하기

  입출력 문제를 풀었다. 기본적으로 Node.js에서 readline 모듈로 주어졌고, rl.on 이벤트 리스너를 기반으로 작동했다. 일반적으로 solution() 함수가 아니라 rl.on 이벤트 리스너 내부에서 로직을 처리하면 되는데 처음봐서 헤맸다. return이 아니라 console.log로 출력하니 통과했다.

- P181951: a와 b 출력하기

  문제는 `P181952`와 비슷하다. rl이 콜백함수를 받기 때문에 코드를 간략하게 쓸 수 있던 것. 구조분해할당을 잊지말자!

- P181950: 문자열 반복해서 출력하기

  이것도 입출력 문제. 이전까지는 크게 데이터를 수정할 일이 없어서 close 분기 처리를 안했는데, 이번에는 입력받은 데이터로 새로운 값을 만들어내야 해서 line 이벤트 발생 단위로 실행하니까 시간이 너무 오래 걸림. close 분기처리 + 구조분해할당을 이용하니까 20~40ms정도로 속도가 크게 빨라졌다.

2025.01.07

- P181949: 대소문자 바꿔서 출력하기

  어제 푼 입출력 문제를 되살려 다시 풀었다. 확실히 close 분기 처리를 하면 빠르다. 문자열을 순회하려고 구조분해할당으로 배열로 만들었다. 대소문자는 toUpperCase() / toLowerCase()로 했고, 문자열 구분은 아스키 코드를 활용했다.

- P181948: 특수문자 출력하기

  벡틱을 활용하면 좋다.

- P181947: 덧셈식 출력하기

  Number로 명시적 형변환 하는 과정에서 map으로 한 번에 바꾸면 새로운 배열이 생기면서 추가적인 메모리 할당이 들어가고 조금 더 시간이 걸릴 수도 있다. 바로 형 변환하면 코드 가독성은 조금 떨어지는데 속도는 아주 조금 더 빠르다.

2025.01.08

- P181946: 문자열 붙여서 출력하기
  
  replace와 구조분해할당으로 풀었다. 자바스크립트 문자열 메소드를 한 번 총정리 해야겠다.

- P181945: 문자열 돌리기

  "며칠 전보다" 구조분해할당을 쓰는 감이 생긴 것 같다. 

- P181944: 홀짝 구분하기

  문제 푸는 방식은 다양하지만 클린 코드도 고민하는 습관이 꼭 필요하다.

- P12925: 문자열을 정수로 바꾸기

  Level0만 풀기에는 늘어지는 것 같아서 Level1도 풀었다. 정답률이 높은 문제라 쉬웠음. (명시적 형변환)

- P77484: 로또의 최고 순위와 최저 순위

  문제는 복잡했지만 사실 당첨 로또 번호의 개수만 셀 수 있으면 푸는 문제였다. 나는 순위 매칭을 객체로 활용했는데, 어차피 key-value가 다 숫자라면 다른 풀이처럼 배열과 인덱스 값으로 활용해도 좋았을 것 같다. 
  배열 원소끼리의 교집합 개수를 확인할 때 Set이 있다는 것도 기억해두자.

2025.01.09

- P181943: 문자열 겹쳐 쓰기

  replace 사용 방법을 헷갈렸다. 문자열 메소드 총정리 필수…

- P181942: 문자열 섞기

  js에서는 기본 for문보다 map이나 다른 콜백함수를 더 많이 사용하는 것 같다.
  map에서도 인덱스를 사용할 수 있단걸 잊지 말기.

- P181941: 문자 리스트를 문자열로 변환하기
  
  문자열 메소드만큼이나 배열 메소드도 많다는 것...ㅋ 문제는 쉬웠다.

- P181940: 문자열 곱하기

  기본 문제였다.

- P181939: 더 크게 합치기

  js는 함수가 너무 많다. Math.max는 아무리 해도 맨날 까먹는듯.

- P181938: 두 수의 연산값 비교하기

  `P181939`과 같은 유형이라 복습했다.

2025.01.10

- P181937: n의 배수

  삼항연산자로 반환하면 끝나서 어렵지 않았다.

- P181936: 공배수

  처음으로 케이스 통과를 못해 반례를 고민. n과 m이 서로소가 아닌 경우 `n*m`은 최소공배수보다 클 수 있어서 공배수를 찾을 때 `n*m`을 계산해서 구할 수 없다. (ex. num=4, n=4, m=2)

- P181935: 홀짝에 따라 다른 값 반환하기 

  문제를 제대로 이해하지 못해 푸는 시간은 평소보다 조금 더 걸렸다. 좋은 코드가 무조건 다 짧고 빠른건 아니라는 얘기를 들은 적 있다. 다른 코드를 비교해보니, 내가 이해할 수 있는 선에서 가장 효율적이고 가독성 괜찮은 코드를 짠 기분. (처음으로 뿌듯)

2025.01.11

- P181934: 조건 문자열

  eval()을 사용해서 풀었고, 잊고 있던 메소드이기도 했지만 어차피 지양해야 하는 메소드. 사실 if문만으로도 풀 수 있는 문제였다.

- P181933: flag에 따라 다른 값 반환하기

  너무 기초적인 삼항연산자 문제.

- P181932: 코드 처리하기

  문제는 길었지만 천천히 읽으면서 하니까 나쁘지 않았다. if문에서 상위 조건이 참이면 다음 코드들은 실행하지 않는다는 점을 활용했다. 

2025.01.14

- P181931: 등자수열의 특정한 항만 더하기

  오래 걸리진 않았찌만 무작정 문제를 풀려다가 잠깐 헤맸다. 차근히 설계하고 풀었다면 더 빨랐을지도.

- P181930: 주사위 게임 2

  중복을 확인할 때는 Set을 이용하면 간편하다.

- P181929: 원소들의 곱과 합

  reduce는 2번째 파라미터로 초기값을 설정할 수 있고, 첫번째는 콜백함수다.

2025.01.15

- P181928: 이어 붙인 수

  reduce 함수의 초기값에 배열 2개로 초기화하면 구조분해할당을 사용할 수 있다.

- P181927: 마지막 두 원소

  인덱스 개념만 알면 쉽게 풀 수 있던 문제.

- P181926: 수 조작하기 1

  `P181925`를 먼저 풀었어서 객체에 매핑하는 방식으로 풀었는데, key에 "wasd"를 두고, 메소드로 선언해서 reduce로 값을 계산하는 방식도 있었다.
  이 문제에만 객체 메소드를 쓰기 좋을 것 같은데 객체 활용하는 아이디어는 다양하단걸 또 느꼈다.

- P181925: 수 조작하기 2

  reduce + switch로 풀었는데 객체를 만들고 key에 매핑하는 형식으로 풀 수 있었다. 

2025.01.16

- P181924: 수열과 구간 쿼리 3

  문제를 다르게 이해해서 오래 걸렸다. 구조분해할당으로 원소 교환만 해주면 되는 문제였는데..ㅎ

- P181923: 수열과 구간 쿼리 2

  정답률 높은 문제였는데 계속 테스트 케이스에서 틀려서 지금까지 푼 문제 중에 제일 오래 걸렸다. 질문하기 반례 다 찾아봤는데도 오류를 못찾아서 결국 gpt한테 물어봤다. ㅎ.. 나는 오름차순된 배열에서 조건 k의 인덱스 + 1을 찾았다면 gpt는 애초에 k 이후로 필터링을 하고 오름차순을 한 방식이었다. 생각의 전환 쩝..

- P181922: 수열과 구간 쿼리 4

  수열과 구간 쿼리 시리즈 중에 가장 쉬운 문제였다. 어차피 배열 값을 조작해야 하니 slice로 부분 배열을 만들지 않고 for문을 사용했다. reduce를 사용하는 방법도 있는 것 같은데 내가 이해하기엔 너무 어려웠음...

2025.01.17

- P181921: 배열 만들기 2

  정규식을 사용해서 풀었는데 정규식은 아무리 해도 어렵다. 아무리 인터넷을 찾아봐도 모르겠어서 결국 gpt한테 물어봤다.

- P181920: 카운트 업

  너무나 기본적인 for 반복문 문제

- P181919: 콜라츠 수열 만들기

  다른 사람이 쓴 풀이를 보면서 at()을 알게 됐다. 음수 인덱스를 지원하는 배열 메소드인데 마지막 원소를 가져올때 -1라고 하면 되니 유용할 것 같다.

2025.01.19

- P181918: 배열 만들기 4
  
  확실히 at(-1)을 쓰니까 배열의 마지막 요소를 짧게 표현할 수 있어서 좋은 것 같다.

- P181917: 간단한 논리 연산

  and, or의 논리 연산으로도 풀 수 있는 문제.

2025.01.20

- P181916: 주사위 게임 3

  예쁜 코드는 아니지만 풀긴 풀었다. 다른 사람의 풀이를 보니 모든 경우의 수를 if문으로 풀어내는 것 외에는 눈에 띄게 괜찮은 코드는 없었다.

- P181915: 글자 이어 붙여 문자열 만들기

  문자열 인덱싱으로 쉽게 풀었다.

- P181914: 9로 나눈 나머지

  문자열을 숫자로 바꾸고 사칙연산하는 문제라 쉽게 풀었다.

2025.01.21

- P181913: 문자열 여러 번 뒤집기

  문자열을 배열로 변환해서 저장할때는 구조분해할당보다 split을 사용하는게 가독성이 더 좋은 것 같다. 배열 메소드 중 어떤 것이 원본 배열을 변경하는지 구분하고, slice, splice를 다시 한 번 정리 해야겠다.

- P181912: 배열 만들기 5

  *문자열.substr(시작인덱스, 길이)* 헷갈리지 말자!

- P181911: 부분 문자열 이어 붙여 문자열 만들기

  *문자열.slice(시작인덱스, 끝인덱스)* 를 기억하자..

2025.01.22

- P181910: 문자열의 뒤의 n글자

  양수를 음수로 바꾸기 위해 *1 했다.

- P181909: 접미사 배열

  Array.from()을 통해 문자열을 배열로 바꾸는 경우 두 번쨰 매개변수로 매핑 함수를 지원하기 때문에 구조분해할당보다 조금 느릴 수 있지만 따로 map()을 사용하지 않아도 돼서 좋다. 하지만 구조분해할당이 가독성과 속도에서 조금 더 좋다고 한다.

- P181908: 접미사인지 확인하기

  접미사, 접두사 문제를 풀 때는 문자열 메소드의 endWith(), startWith()을 활용하자.

2025.01.23

- P181907: 문자열의 앞의 n글자

  문자열 slice 문제.

- P181906: 접두사인지 확인하기

  문자열 startsWith 문제.

- P181905: 문자열 뒤집기

  replace와 splice 방법 2가지를 사용해 풀었다. splice는 제거된 요소를 반환하고, 원본 배열을 수정하기 때문에 반환값을 저장하면 예상과 다른 결과를 얻을 수 있다는 걸 잊지 말자.

2025.01.24

- P181904: 세로 읽기

  나는 for와 step으로 인덱스를 계산했는데, % 연산자로 인덱스를 계산하면 간결하게 구할 수 있다.

- P181903: qr code

  익명변수로 _를 사용할 수 있다. 큰 의미 없다는 뜻.

- P181902: 문자 개수 세기

  알파벳 대/소문자를 모두 포함한 배열 혹은 객체를 만들땐 결국 모든 알파벳을 한 번씩 적어야 하는듯. 그래도 직접 초기화하는 것보다는 문자열로 나열한 뒤 다른 자료형으로 변환하는게 효율적이라 생각된다.

2025.01.25

- P181901: 배열 만들기 1

  배수 구하는 문제. 다만 1부터 시작이 아니라 주어진 마지막 수부터 -1로 내려오면 코드를 조금 더 짧게 쓸 수 있다.

- P181900: 글자 지우기

  어제 배운 익명 함수와 filter를 사용해서 풀었다. 이 문제 조건에는 includes를 써도 성능상 큰 문제가 없지만, 비교 대상이 많아지면 성능이 떨어질 수도 있을 듯.

- P181899: 카운트 다운

  반복문만 알면 풀 수 있는 문제여서 쉬웠다.

2025.01.27

- P181898: 가까운 1 찾기

  indexOf()의 두번째 파라미터로 시작 인덱스를 사용할 수 있다.

- P181897: 리스트 자르기

  일정 간격으로 리스트를 추출할 때 `filter((_, idx) => !(idx % c))` 이렇게 !연산자로 간결하게 작성할 수 있다. 나는 일치연산자로 비교했는데 !연산자를 사용하는 방식이 더 나은 것 같다.

2025.01.28

- P181896: 첫 번째로 나오는 음수

  findIndex() 메소드는 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환한다. 정확히 이 메소드가 문제의 답이었다. js는 메소드가 너무 많아서 힘들구만

- P181895: 배열 만들기 3

  나는 두 배열을 합칠 때 concat() 메소드를 사용했는데, 다른 코드를 보니 전개연산자를 사용하거나 flatMap()을 사용하기도 했다. flatMap()은 배열의 각 요소에 주어진 콜백 함수를 적용한 결과를 한 단계씩 평탄화해서 새로운 배열을 반환한다. 이와 비슷하게 map().flat()으로 사용할 수 있지만 두 메소드를 연결한 것보다 flatMap()을 한 번 적용하는게 더 효율적이다. 

- P181894: 2의 영역

  2가 없다 == indexOf()의 결과가 -1이다를 활용해 삼항연산자를 사용하는 방법도 좋은 것 같다. 그리고 종종 결과 배열에 답이 없어 -1을 반환해야 하는 경우 결과를 찾는 1줄, 배열의 길이를 비교해 삼항연산자로 return 하는 1줄을 나눠서 쓰는게 싫었다. 그래서 gpt한테 물어보니까 삼항연산자 안에서 결과 배열을 선언하고 그걸 반환하면 된다고 했는데 코드 가독성이 좀 떨어지는 것 같아서 그냥 두 줄로 쓰는 것도 괜찮을 것 같다.

2025.01.29

- P181893: 배열 조각하기

  map은 원본 배열을 수정한다. 맨날 헷갈려 ㅠ

- P181892: n 번째 원소부터

  slice() 메소드 문제.

- P181891: 순서 바꾸기

  자른 배열을 앞으로 가져온다는 점에서 push() 메소드를 써도 충분했다. 나는 slice() 2번으로 나눴는데 push()를 썼으면 더 좋았을 것 같다.

2025.01.30

- P181890: 왼쪽 오른쪽

  return문을 잘 활용하면 코드를 조금 더 간결하게 사용할 수 있다. (ex. 답을 저장할 배열을 생략)

- P181889: n번째 원소까지

  slice() 메소드 문제.

- P181888: n개 간격의 원소들

  일정 간격으로 배열의 원소를 추출해내는 문제. 전에 풀었던 `P181897`을 참고해서 풀었다.

2025.01.31

- P181887: 홀수 vs 짝수

  나는 홀수 인덱스를 추출한 배열, 짝수 인덱스를 추출한 배열의 총합을 각각 구했는데, 처음에 주어진 숫자 배열을 한 번만 순회하면서 짝수 인덱스/홀수 인덱스의 합을 구하는 것이 더 효율적인 것 같다.
  나는 복잡하게 풀었지만 예전보단 js의 메소드를 다양하게 활용하게 된 것 같다. 

- P181886: 5명씩

  '5명씩 그룹을 짓는다'해서 splice()로 배열을 나눴는데, 다시 생각해보니 5 간격의 인덱스만 알면 되는 것이었다. 그래서 filter()로 문제를 풀었다. 
  이 문제를 풀면서 map() 메소드는 콜백함수에서 원본 배열이 수정되더라도 처음에 map()을 시작한 배열 원소만큼만 동작한다는 것을 알았다.

- P181885: 할 일 목록

  filter() 메소드에서 필터 조건이 순회하고 있는 배열이 아니어도 가능했다. `todo_list.filter((e,i) => !finished[i]);` 이런식으로. 풀다보니 filter()가 매우 유용한 듯?

2025.02.23

- P181884: n보다 커질 때까지 더하기

  기본 반복문보다 js 메소드를 쓰는게 더 재밌다. 조건이 있는 합을 구할 때 reduce가 딱일 것 같은데 어떻게 중단시킬지 알아보니 reduce의 4번째 인자로 원본 배열이 오는데 이 배열을 splice로 자르면 된다. 예전에 reduce 계산 중 배열이 바껴도 원래 배열만큼 순회하는 이유가 4번째 인자로 전달되는 원본 배열을 수정하지 않아서였다. 
  문제를 풀때는 기본 반복문이 더 좋았을지 모르겠지만 reduce를 하나 더 배웠다.

- P181883: 수열과 구간 쿼리 1

  내가 쓴 코드도 그렇고, 보통 O(n*m) 정도로 코드를 짜는 것 같다. gpt한테 효율적인 코드를 물어보니 차분 배열을 쓰면 대량 데이터에서는 효과적이라고 한다. 차분 배열이란, 배열의 시작과 끝 지점에서만 연산해서 배열의 특정 구간에 대해 효율적으로 값을 변경하는 자료 구조이다. 하지만 내가 지금 쓰기엔 조금 어려움..ㅠ 
  대신에 나는 연산 반환값이 필요한게 아니니 map() 대신 forEach()가 낫겠다.

- P181882: 조건에 맞게 수열 변환하기 1

  짝수/홀수를 판별할 때 `num%2===0`보다, `!(num%2)`나 `num%2`로 더 간결하게 구할 수 있다.

2025.02.08

- P120803: 두 수의 차

  뺄셈 문제.

- P120807: 숫자 비교하기

  삼항 연산자 사용.

- P120820: 나이 출력

  뺄셈 문제.

2025.02.10

- P120804: 두 수의 곱

  곱하기 문제.

- P120805: 몫 구하기

  몫을 구하려고 Math.floor()를 사용했다.