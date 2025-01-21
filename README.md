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
