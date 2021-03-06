# 웹접근성과 웹표준 

## 웹표준

- 동일한 환경에서 동일한 모습을 보여주는 것 

## 웹접근성

> 장애 여부와 상관없이 누구나 원활하게 웹페이지를 이용할 수 있어야 한다는 것

- 모든 이미지에는 대체 텍스트를 제공
- 소리없이 화면으로 진행되는 경우 별도의 텍스트나 음성으로 해당정보를 제공
- 글자와 배경간의 명도대비 와 폰트크기를 충분히 제공
- 키보드만으로도 모든 정보 확인 및 기능을 이용할수 있드록 구현 

## 콘텐츠 모델 

- 요소별로 비슷한 성격을 가지고 있는 것끼리 그룹화 시킨 것

### 카테고리

- 메타데이터 컨텐츠
- 플로우 컨텐츠
- 구획 컨텐츠
- 제목 컨텐츠
- 구문 컨텐츠
- 내장형 컨텐츠
- 대화형 컨텐츠
- 기타등등...

> 인터렉티브 컨텐츠 안에 인터렉티브 컨텐츠를 만들수 없다. 

## 아웃라인 알고리즘 

- 정보 구조를 명확하게 하는 것

    ```html
    <body>
    <header>
        <h1>HTLM5</h1>
        <nav>
            ...
        </nav>
    </header>
    <section>
        <h1>콘텐츠모델</h1>
        <p>...</p>
    </section>
    <section>
        <h1>...</h1>
        <article>
            <h1>...</h1>
        </article>
    </section>
    <footer>
        <h1>...</h1>
    </footer>
    ```

    > 같은 레벨로 작성 하는 게 아니라 계층이 분류되는 것을 말한다.

## markup의 기초

- HTML 문서는 요소와 태그 그리고 콘텐츠로 구성 , 요소는 HTML의 의미를 가진 개념이다.

- - - 

## 마크업 순서

- 컨텐츠 중심으로 마크업한다 성격이 같은 컨텐츠 끼리 나누거나 묶는 작업이 필요하다.

1. 3단 골격

    ```html
    <header></header>
    <main></main>
    <footer></footer>
    ```

1. 4단 골격

    ```html
    <header></header>
    <nav></nav>
    <main></main>
    <footer></footer>
    ```

> `header`는 브랜딩 영역을 포함시킨것이며 떄로는 네비게이션까지 포함시킨다.

> `footer`는 저작권 및 주소 정보를 보여주는 곳이다.

## 구조

```html
<div>
    <header></header>
    <div></div>
    <main></main>
    <article></article>
    <footer></footer>
</div>
```

1. 시멘틱 마크업 , 의미를 부여하는 단계

    - div (중립적인 컨텐츠 일 경우 , 묶어 놓는 역활 )
    - header 
    - main
    - article (`section`은 장 단위로 나눈것 / `article`은 독립적인 정보에 쓰인다.)
    - footer 

1. 네이밍단계

    - `#` : 아이디 방식 (유니크)
    - `.` : 클래스 방식 (여러번 재사용 가능)


    > 클래스이름은 이름만 보고 내용을 알수 있게 만든다.

    > pc MainMenu 파스칼케이스

    > cc mainMenu 카멜 케이스

    > sc main_menu 스네이크 케이스

    > cc main-menu 케바케이스 

    - 헤더태그에 클래스 이름을 header 라고 준다.
    - 비쥬얼 영역은 .visual
    - 메인은 .main
    - 아티클은 .slogan
    - 푸터는 footer
    - 바깥 div는 wrap wrapper , container 를 쓴다
    - .container 라고 준다.


    > 바깥을 감싸는 것은 넓이를 조정할수 있다. 

    > `+` : 는 형제 태그

    > `>` : 자식 태그 

    > article 은 명시적인 아웃라인을 가진다 그래서 헤딩을 포함해야한다
    
    > body 자체에는 width 가 안 먹힌다.

1. 배치 하기 위한 컬럼 나누기

    main 안에 3개 div를 만든다

    네이밍은 .group 이다

    클래스는 중복이 가능하다 하지만 각 각의 div의 width가 다르다.

    구분하는 방법은 부모의 몇번째 child인지로 구분할수 있지만 추가로 이름을 줄 수 있다.(group1 , group2, group3)

    `div.group.group${그룹$}*3`
    
    - `*` : 원하는 숫자 만큼     
    - `$` : 해당하는 index로 대체가 된다.    
    - `${글자}` : 중괄호안에 원하는 글자를 넣을 수 있다. 

    > `user-agent`는 브라우저를 말한다. 브라우저마다 `user-agent`가 달라서 크로스 브라우징이 발생한다.

    > CSS는 스타일이 겹칠 수 있다 

    > CSS파일로 정의한 코드가 `user-agent`보다 우선순위가 높다.

    > `m0` -> `margin : 0;` 으로 바뀐다.

    > `em`은 상속받은 글자 크기를 의미한다. `body`의 기본 `font-size`는 16px 이다.

    > `-webkit-`, `-ms-` , `-moz-` 를 벤더 접두사(prefix)라고 한다.

    > `,` 은 그룹핑 연산자이다.

    > 기존 스타일을 초기화 시키는 것을 리셋 스타일 이라고 한다.

    > 배치관점이 아닌 컨텐츠 관점으로 구성해야한다.

    > 높이는 고정하지 않는 것을 권장한다.

    .header height : 110px

    .visual height : 120px

    .main height : auto

    .slogan height : auto

    .footer height : auto

    .group1 height : 250px
    
    .group2 height : 380px
    
    .group3 height : 190px

    .group1+.group2+.group3 margin :  30px

    .main margin : 30px 0 30px 0 

    > 설계할때 크기를 부터 계산해야한다

    > 베이직 박스 모델이라고 한다.

    .slogan , .footer margin : 10 0; 

    > rgb 6자리가 반복되면 단축 할수 있다

    > `vh` : 는 화면에 보이는 영역까지 출력된다. 

    > `body`는 100%를 할수 없다. 

    > 모든 요소의 백그라운드가 투명(transparent)이다. 

    > 구조를 짤때 영역을 구분하기 위해 임시 배경색을 설정한다.

    > `margin : 0 auto` 하면 `margin`을 계산해서 반으로 나누어서 설정하는 것이다.

    > `margin : 0 auto`가 마치 가운데 정렬 된것 처럼 보이기 할 수 있다.

    > `margin : [top] [right] [bottom] [left]` 순서이다.


- - - 

## HTML SNIPPETS 설정

- `.vscode\extensions\abusaidm.html-snippets-0.2.1\snippets` 에 가서 `snippets.json` 파일을 연다음 주석을 풀고 프로그램을 다시 킨다.

## 단축키 등록방법

- 왼쪽 하단 `설정`버튼에서 `바로가기`에서 `emmet`으로 검색해서 키를 등록한다.

- - -

## 기획디자인 

> 페르소나를 만들어서 사용자 경험을 끌어내야한다.