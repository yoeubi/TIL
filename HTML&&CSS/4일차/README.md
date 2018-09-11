# 4일차

## 마크업 순서

- 먼저 **구조 분석**을 하고 나서 **디자인 설계**를 한다.

### 구조 분석

```html
.header
    .navigation
        ul.menu
            li.menu-item[menu-item-act]
                span.menu-item-text(HTMP에 대해)
                ul.sub-menu
                    li
                        a(HTML5 소개)
```

- 텍스트를 인라인 박스로 묶을때 `span`을 쓴다.
- `span`을 `a`요소로 마크업을 해서 탭 포커스를 만들 수 있지만 접근성 관점에서는 어딘가로 이동하는 것이 아니라서 추천하지 않는다.

- `◎ HTML5` 에서 `◎`는 텍스트가 아니라 이미지로 마크업을 할 것이다.

- 인터렉트를 스크립트에 넣는 경우도 많지만 `hover`했을 때 장식적인 값들을 가진 클래스를 따로 만들어서 관리 할 것이다.

- `.menu-item-act`라는 동적인 클래스를 만들것이다.

- 제이쿼리로 `addClass` , `removeClass`로 컨트롤 할 것이다.

```css
.header {
    width : 940px;
    margin : 0 auto;
    box-sizing : border-box ;
    padding : 0 30px;
}
```

- `.header`의 컨텐트는 최대 880px이다. 

- `.logo`는 `position : absolute` 한 상태이며 `.member`는 노멀 플로우 상에 배치 되어 있다.

- `.navigation`이 주요 영역이지만 `navigation`, 과 `.menu`의 위치가 동일하기 때문에 `menu`를 기준으로 CSS를 설정 할 것이다.

- 이떄 `logo`랑 `.menu li`가 겹치는데 이때 `.menu`를 여백을 줘서 겹치지 않게 만든다.

```css
.menu {
    padding-left: 225px;
}
```

- `.menu li`를 가로로 배치하는 방법은 `flex`, `float` , `inline` ,`inline-block`등이 있다.

- `.menu li`는 `inline | inline-block`방식을 사용하지 않을 것이다 이유는 요소 사이에 공백문자가 생기기 때문이다.

- `float` 방식을 사용 할것 인데 이때 float 하는 순간 부모는 높이를 잃어버리면서 아래요소가 올라간다.

- 하지만 `.menu`의 `height`는 디자인상 변할 가능성이 없으로 고정을 시킬것이다.

- 순수 `height`는 45px이다 float의 부모 요소에 `height`를 주면 마치 float 요소의 `height`를 인식한 것 처럼 보일 수 있다. 

- 하지만 `font-size`가 달라지며는 문제가 될 수 있다. 커짐에 따라 `height`가 변하는게 아니기 떄문이다.

- `.menu` 위에 선을 칠한 것인데 이때 `border` , `outline` ,`box-shadow`로 정의 할수 있지만 직관적인 `border-top : 2px solid #000`을 줄 것이다.

- `box-sizing : border-box`라서 `height`에 `border`가 포함이 되서 `.menu`의 `height`를 45px 에서 47px로 변경 한다.

- `.menu` 밑에 `.sub-menu li`를 표시하기 위해 `.navigation`에 `padding-bottom: 40px`을 준다.

- `.menu`의 `background`는 이미지 방식 중에서 gradient 방식을 할 것이다.

- 만약 gradient를 시간에 따라 각도가 달라진다면 화면이 움직이는 것 처럼 보일 수 있다.

- 만약 네트워크 이슈나 예외 상황이 발생했을때 gradient를 대체할 것이 필요하다.

```css
div {
    background-color: #F37335;
    background-image: linear-gradient(to bottom, #FDC830 0% , #F37335 30% , #F37335 60%, #FDC830 100%);
}
```

- 같은 속성이 두번 선언이 되면 겹치면서 재정의가 된다. gradient가 안될 경우를 대비 해서 `background`를 준다. 하지만 `color`가 gradient 보다 밑에 있어서 안된다 이유는 색깔이 날라가기 떄문이다.

- 대표 속성으로 하기 보다는 개별 속성으로 하는게 CSS 디버깅에는 편리하다.

- `.menu`의 모서리를 둥글게 만들려면 `border-radius`를 설정하면 된다.

- `border-radius : 0 0 5px 5px` 로 설정한다 이것은 단축 표기법이다.

- `.header` 부분에도 `border-radius : 0 0 15px 15px`을 준다.

- 만약 박스가 100 * 100 인 상태에서 `border-radius`를 200을 줘도 박스 크기의 100의 절반 50 50 해서 절반의 모서리가 생긴다

- 랜더링 엔진이 `border-radius`에 큰 수치를 받아도 상자크기로 재정의 한다.

- `.menu li`를 float 시킬것이다.

```css
.menu li {
    float: left;
}
```

- 만약 이렇게 할 때는 `li ul li` 역시 영향을 받는다.  그래서 `.menu li`의 `width`값이 커진다.

- float는 라인 박스 안에 배치가 될수 없으면 새로운 라인 박스를 생성하고 배치를 한다.

- float를 써서 배치를 할때 라인박스가 새로 생긴다면 잘못 측정한것이다.

- `.menu-item`을 기준을 잡고 하는게 편하다. `position : relative`를 준다.

- 하지만 `.logo`가 사라지는데 이유는 `absolute`, `relative`하면 붕 떠 있는데 마크업 순서상 나중의 것이 위로 올라온다.

- `.logo`에 `z-index : 100`을 준다.

```css
.menu-item-text {
    font-size: 1.6rem;
    font-weight: 700;
}
```
- `.menu-item-text`의 글꼴 크기를 바꿀 것이다.

- `font`는 상속이 되서 부모요소에서 정의하면 안된다.

- 글자에 테두리를 줄라면 `text-shadow`를 사용하면 된다.

- `text-shadow : 1px 1px 0 #000`으로 한다. x축으로 1px , y축으로 1px 이동하고 blur 값을 0으로 한다. blur 값은 커지면 뭉개진다.

- 만약 그림자를 다중으로 넣고 싶다면 `,`를 하고 값을 더 넣으면 된다.

```css
 text-shadow: 1px 0px 0 #000 , 
                0px 1px 0 #000 , 
                -1px 0px 0 #000 ,
                0px -1px 0 #000;
```

- 색상은 16진수 rgba ,hsla 가 있는데 hsla는 원을 기준으로 값을 찾는 것이며 채도 명도를 0 ~ 100% 까지 조정 할 수 있다.

- `.menu-item`들이 떨어져야 하고 구분선이 있어야한다. 이 구분선은 `.menu-item`을 기준으로 하는게 좋다.

```css
menu-item {
    border-left: 2px solid rgba(255,255,255,0.5);
}
```
- float 된 요소의 부모의 `height`를 지우면 높이를 잃어버린다.

- float 된 요소의 높이를 인식하려면 `overflow : hidden`을 하면 된다.

- 이때 Block formatting context를 생성해서 잃어버린 높이를 인식한다.

- 익스 9에서는 float 이슈를 해결할려고 `zoom : 1`을 준다. 확대 , 축소를 할려면 원본이 있어야 해서 사라진 높이를 인식한다.

- `overflow : hidden` 하는 이유는 자식요소가 커져서 보이지 않게 하는 이유도 있다.

- `.menu-item-text` 에 여백이 필요해서 `padding: 0 20px`을 한다. 하지만 `padding`을 준다고 해서 텍스트의 위치가 바뀌지 않는다.

- 텍스트는 오직 `line-height`에 영향을 받는다. 

- `.menu-item-text`를 `display:block`으로 만들면 `padding`의 높이가 `li`에 포함이 된다.

- 그루면 높이로 인식이 되서 `.menu-item`의 `height`는 지워도 된다.

- 하지만 `font-size`를 늘리면 높이가 커진다. 그래서 위아래 `padding`이 아닌 `line-height`를 주면 높이가 늘어난것 처럼보인다 

- `.menu-item-text` 에 `line-height: 45px`를 하면 신기하게 세로로 정렬이 된것 처럼 보인다.

- `line-height`의 원리는 `line-height : 20px , font-size : 10px`이면

- `line-height`에서 `font-size`를 빼고 나누기 2 한 만큼을 텍스트 위 아래에 설정해서 텍스트가 가운데 정렬 된것 처럼보인다.

- `.menu`를 `overflow : hidden`을 하니 `.sub-menu`가 짤려서 안보인다. 그래서 삭제를 하고 `height`값을 다시 준다.

```css
.menu-act .menu-item-text {
    color : #ff0;
    border-bottom: 2px solid black;
}
```

- 하면 원하는대로 텍스트 크기만큼의 줄이 안생긴다 이유는 `span`의 `width`는 `padding`까지 포함하기 때문이다.

- 텍스트 크기만큼 할려면 `span::after` 방식으로 해야한다.

```css
.menu-act .menu-item-text::after {
    content: "";
    display: block;
    background: pink;
    border-bottom : 2px solid #000;
}
```

- 이러면 텍스트 노드와 같은 형제 레벨이 생성이 된다 이것을 `display : block`으로 만들면 `span`밑에 블록 박스가 생성이 된다.

- 이때 `border`나 `height` , gradient , box-shadow 로 검은색 선을 그을수 있다.

- `.sub-menu`를 기준으로 포지션을 잡을 것이다 이유는 순서를 바꿔도 자동으로 위치가 동일하게 만들 수 있기 때문이다.

- `.sub-menu`를 인라인 블록으로 만들면 공간이 부족해서 줄바꿈이 되서 배치가 된다.

- 이떄 부모의 `width`를 넓히면 한줄로 가능하지만 모든 요소의 너비를 계산해서 넣어야해서 불편한 방법이다.

- 부모에게 `white-space : nowrap`이라고 주면 줄바꿈이 금지가 되고 알아서 레이어의 `width`값이 늘어난다.

- 하지만 `white-space`는 블록 요소안의 인라인요소에게만 적용이 된다. 

- `absolute`인경우 `white-space`가 적용 되지 않는다.

```css
.sub-menu a {
    background: pink;
    padding: 10px 0;
}
```

- 하면 여백이 위 아래로 들어가지만 글자 위치가 이동되지는 않는다. 그리고 또한 윗요소와 겹쳐서 클릭이 잘 못 될수도 있다.

- 하지만 `display : inline-block`으로 바꾸면 링크 면적이 넓어진다.

- 그리고 `.sub-menu`에 마우스를 올리면 아이콘을 바꾸게 할 것이다. 이때 `a`요소안에 가상상자를 만든다.

```css
.sub-menu a::before{
    content: "r";
    font-family: "webcafeIcon";
    position: relative;
    top: 2px;
}
```

- "r"에 `font-family`를 주는 순간 문자의 의미가 바뀐다. 

- 폰트어썸은 가져다쓰면 되는 장점이 있지만 마크업을 계속 건들여야하는 문제짐이 있다.

- 그리고 키보드로도 접근이 가능하도록 `:focus`도 추가한다.

```css
.sub-menu a:hover::before,
.sub-menu a:focus::before {
    content : "c";
}
```

- `.sub-menu a`의 간격을 `padding`이 아닌 `margin`으로 준다.

- 하지만 4번째 `.sub-menu` 서부터 `.header`바깥으로 넘어간다. 잘못하면 스크롤바가 생기기때문이다

- `.sub-menu`를 당기는 방법도 있으나 각각 따로 계산해야하므로 추천하지 않는다.

```css
.menu-item:nth-child(-n + 3) .sub-menu {
    left: 0;
}
.menu-item:nth-child(n + 4) .sub-menu {
    right: 0;
}
```

- 그래서 4번쨰 이상부터는 오른쪽으로 배치하는 것으로 바꾼다.

- `li`가 포커스를 받으면 `outline`이 생기는데 다른 대안이 있다면 없애도 된다.

- - -

## jquery

- 제이쿼리의 장점은 크로스 브라우징환경을 지원하기 때문이다.

- 하지만 요즘 추세는 제이쿼리를 배제한다 이유는 더이상 익스 구형에 대한 지원이 필요가 없고 무겁기 때문이다.

- 제이쿼리는 `body`의 마지막부분에서 불러온다,

- Dom Tree 가 구현되기전에 위에서 순차적으로 파싱되기 때문에 그전에 실행될수가 있다 .

- `querySelector`는 요소 한개를 `querySelectorAll`하면 배열을 받아온다.

- 마우스 호버를 했을때 클래스가 추가가 되도록 만들것이다

```js
item.on('mouseover focusin',function(){
    item.removeClass('menu-act');
    $(this).addClass('menu-act'); // 이때는 클래스 이름만 들어간다.
});
```

- `tabindex`도 자바스크립트로 넣을 것이다.

```js
item.attr('tabindex','0');
```

- `.sub-menu`에 접근해서 `a`에 클래스를 토글을 하면 된다.

```js
subItem.hover(function(){
    $(this).toggleClass('fa-angle-right');
});
```

### `defer`, `async`

- `defer`는 다운로드를 동시받고 나서 트리가 다 생성이되면 그때 시행이 된다.

- `async`는 다운로드는 각자 받는데 다운이 받아지면 파싱이 중지되고 실행이 된다.

- - -
## 웹폰트가 적용이 안될 시

- 자원이 제대로 연결이 되어 있나 네트워크 패널에 들어가서 확인한다.

- - -

## 개발 방법론

- 점진적 향상법
    - 무조건 신기술을 사용하는게 아니라 지원하지 않는 환경서부터 시작한다.
- 신기술을 먼저 한다음 보강하는 방법이 있다.


- - -

# 추천 사이트 

[그라디언트](https://uigradients.com/#PaleWood)

[defer aysnc](https://developer.mozilla.org/ko/docs/Web/HTML/Element/script)

## 검색어 

- 그라디언트 패턴 갤러리

- how to use centering 

## Tip

- CSS 픽으로 해당 선택자에 대한 CSS 속성을 볼 수 있다.

- - - 

# 궁금한점

가상요소를 만들고 블록으로 만들면 밑으로 밀리는 것인가?

- - -

# 예습

1. 애니메이션 관련 모듈 

1. form

