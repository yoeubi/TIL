# 비쥬얼 영역 마크업

- `.visual`은 의미가 없어서 `div`로 마크업을 했다. 그래서 `role=group`를 해도 되지만 장식용 컨텐츠라서 안줘도 된다.
- `.box1` , `.box2` 이런식보다는 이해할 수 있는 시멘틱태그를 사용해야한다.
- `alt`를 공백으로 주면 스크린리더가 읽지 않는다.
- 배경이미지는 바깥 컨테이너 또는 `body`에 정의한 것이다.

```html
div.visual
    p.visual-text(web standard & accessibility)
```

- 나무/잎은 `body`의 배경이미지로 하고 꽃은 `.visual`의 배경으로 한다.
- 특수문자는 엔티티네임이나 넘버로 처리해야한다.
    - 엔화는 `&yen;`, 유로화는 `&euro;` , 카피라이트는 `&copy;`
    - 공백은 `$nbsp;` , `&`는 `&amp;`
    - html은 공백을 아무리 넣어도 한개로 인식하기 때문에 공백을 띄울라면 `&nbsp`를 쓴다.
- 만약 안의 컨텐츠가 늘어난다면 `min-height`로 설계해도 된다. 하지만 익스 6버전은 지원하지 않는다.
- 배경이미지를 `body`에 넣을 것이다 이때 멀티이미지를 넣을 것이다. 
- 옛날에는 gradient가 된 바를 생성해서 repeat를 해서 처리했다.
- gradient는 2개를 겹쳐서 mix를 할 수 있다.
- 이미지를 웹에 올릴때는 이미지 최적화를 해야한다.
- `background` 속성은 먼저 선언한게 위로 올라가고 나중에 선언한게 밑으로 내려간다.
- 요소 박스의 `width` , `height`가 300 100 이고 배경 이미지가 50 50 이라면 요소 박스의 크기만큼 이미지가 반복해서 출력이 된다. 이유는 default 값으로 `repeat`가 되어있다.
- `no-repeat`를 하면 한번만 출력이 된다. 하지만 이미지가 2개라면 `repeat`도 2번 정의해야한다. 
- `background-position`은 x축 , y축이다. 만약 50% 50% 를 준다면 요소의 중간에 이미지가 있다.
- `background-attachment`는 default는 `scroll`이다 `fixed`로 바꾸는 순간 이미지가 화면에 고정이 된다.
- `background-color`는 `backgroud` 다음에 설정해야한다 왜냐하면 대표속성에 default 값이 존재하기 때문이다.
- `background`는 멀티 이미지를 사용할때 써도 된다 `positon`은 필수 이고 `size`는 옵션이다 그래서 `/`로 두 값을 구분한다.

- - -

## 애니메이션 시나리오를 작성하라

- 어떠한 애니메이션을 만들고 싶은지 정해야한다
    1. 애니메이션 이름을 정하라
        1. textAni
    1. 어떠한 효과를 주고 싶은지 나열
        1. 텍스트 이동 (왼쪽 상단에서 오른쪽 하단)(0 ,0 -> 400px 75px )
            `position`,`flex`,`padding` , `margin`
        1. 텍스트 크기 (12px -> 24px)
            `font-size`, `transform: scale()`가 있지만 지금은 적절하지 않다.
        1. 투명도 ( 0.2 -> 1 )
            `opacity`는 요소자체의 투명도를 설정한다, `rgba`값을 조정할수 있다. 

- `@charset "utf-8"`은 인코딩 선언이다.
- `@keyframes [애니메이션 이름]]` 애니메이션 이름으로 정의한다는 것
- `from`, `to`로 `0%`에서 `100%`로 할수 있고 마지막 값만 입력해도 된다. 

```css
@keyframes textAni {
    0% {
        font-size: 12px;
        color : rgba( 0 , 0 , 0 , 0.2 );
    }
    100% {
        font-size: 24px;
        color: rgba( 0 , 0 , 0 , 1 );
    }
}
.visual-text {
    background: yellow;
    animation-name: textAni;
}
```

- 애니메이션을 작동 시킬라면 `animation-name`이 필요하다
- `animation-duration: 3000ms` 애니메이션이 진행이 될라면 이름과 얼마간 진행이 될 것인지 시간을 알려줘야한다.
- 이때 한번만 진행이 되고 다시 원래 상태로 돌아가는 데 `animation-fill-mode : forwards`하면 값에 따라 고정이 된다.
- `margin`으로 텍스트의 위치를 바꾸면 되는데 박스 바깥으로 `margin`이 투과가 된다 그래서 부모가 `border` 또는 `padding`을 가지고 있으면 자식요소의 `margin`이 뚫고 나가지 못한다.
- 현업에서는 트릭으로 `border-top: 2px solid transparent`로 한다 하지만 이러면 퍼포먼스에 문제가 생긴다
- 여백만 주는게 아니라 레이아웃 자체를 다시 그리는 것이다 그래서 이때 `transform`을 쓴다.
- `transform` 자체가 애니메이션 되는게 아니라 애니메이션 기능이랑 연결해서 많이 사용한다. `scale()`, `translate()`, `rotate()` 레이아웃은 유지하되 페인팅만 다시 한다 `margin`보다는 성능상 좋다.
- `translate()`는 이동하는 함수로서 2개의 인자를 받는다 x축 , y축이다.
- `translate`를 사용하면 이동은 하지만 레이아웃 자체가 이동해서 스크롤이 되는 문제가 생긴다. 그래서 부모영역에서 `overflow:hidden`을 하거나 `inline-block`으로 만들면 컨텐츠 길이만큼으로 줄어든다.

```html
div.visual
    p.visual-text
```

- `position`을 `absolute`로 해서 좌표값을 변경 하면 된다 이때 이동할 값은 키프레임안에 선언한다. 하지만 퍼포먼스 면에서는 좋지 않다.

- - -

- 먼저 꽃 배경부터 시작해야한다. 배경이 겹쳐있을때는 먼저 선언한 이미지가 위로 올라간다.

```css
.visual {
    position: relative;
    min-height: 120px;
    background: url("images/ani_flower_01.png") 0 -10px no-repeat,
                url("images/ani_flower_02.png") 670px 0 no-repeat,
                url("images/ani_flower_03.png") 300px 0 no-repeat,
                url("images/ani_flower_04.png") 800px 15px no-repeat
    ;
    background-color: pink;
}
```

- 하지만 이렇게 같은 곳에서 설정하면 각각 움직일수가 없다. 그래서 가상요소로 애니메이션을 할것 이다.

```css
div.visual
    ::before
    p.visual-text
    ::after
```

- `::before`에는 배경 1, 2 `::after`는 배경 3 ,4 가 들어가야한다 배경 이미지는 `.visual`의 `width`만큼 확보가 되어야한다.
- 이때 가상요소를 부모 `width`만큼 가지게 할라면 `absolute`로 만든다음 `top : 0`을 준다. 노멀플로우상 `absolute`는 인식을 하지못한다. `width`를 `100%`로 준다.
- 중복되는 코드는 한곳에 몰아서 정의를 해야한다. 그리고 다른 동작은 그 요소로 입력을 한다.
- 안의 자식 요소의 `width`를 잃어버리면 부모또한 같이 잃어버린다 하지만 `.clearfix` , `overflow:hidden`은 `float`일때만가능하다.
- `position`은 읽어들일 방법이 없고 `height`를 줘야하지 한다. 아니면 부모도 똑같이 `absolute`를 하면 된다. 그래서 부모에게 `width`를 강제로 준다.

```css
@keyframes [이름] {
    0% { opacity : 1 }
    100% { opacity : 0 }
} 
```

- `animation-iteration`은 애니메이션의 재생횟수이다. 숫자 또는 `intinite`
- `animation-direction`은 애니메이션의 방향이다 `normal` 순방향,`reverse` 역방향 , `alternative` 양뱡향이다.
- `animation-delay`로 애니메이션에 지연시간을 줄 수 있다.
- 애니메이션 선언값에 대해서 순서는 중요하지 않다. 단위가 없는게 `anitaion-iteration`이고 있는게 `animation-duration`이다.
- `animation`에서 첫번째 숫자값은 `animation-duration`이고 두번째는 `animation-delay`이다.
- `animation-play-state`는 애니메이션을 상태를 정의하는 것이다. `running`은 재생 `paused`는 멈추는 것이다.
- 타이밍은 가감속을 하는 함수이다 그중에서 큐빅 베이지는 사용자가 커스터마이징 한 것이다.
- `rotate`는 글자를 움직이는 함수이다.
- `step()`은 1초에 몇번 반복하는 것이다.
- `trasition`은 시작하는 박스에 선언하면 된다. 하나만 주면 그것만 적용된다. 만약 중간 단계를 만들고 싶으면 `animation`을 써야한다.
- 그리고 변하는 값이 많다면 `all`을 사용하면 된다.
- `flex`는 레이아웃 모델이라서 이동하는 효과를 만들어 낼수 가 없다.
- `flex`는 `width`를 줄이면 줄이 작아지는게 아니라 짤리는 것 처럼 보인다.
- `transition`은 두군데 다 줄 필요가 없고 처음부터 정적인 클래스에 넣고 해야한다 그리고 `:hover`에 넣어선 안된다.

- - - 

## 좋은 사이트

- `mozila reflow repaint`라고 유튜브에 검색한다.

- [애니메이션 성능](https://www.slideshare.net/wsconf/css-animation-wsconfseoul2017-vol2?qid=ac6f293a-d936-4f8c-9121-2bbf46057977&v=&b=&from_search=2)

- [레이아웃을 배웁시다](http://ko.learnlayout.com/)

- [엔티티](https://www.w3schools.com/html/html_entities.asp)

- 코드펜에서 `step animation` 검색

- 구글 검색 : [ css animation library , gallary ] , css shape 

