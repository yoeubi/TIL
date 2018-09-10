# reset.css 와 normalize.css

- reset 과 normalize는 비슷한 기능을 하지만 다른 부분이 있습니다.

- Reset CSS 가 말그대로 무조건 초기화를 시켜버리는 것에 집중하고 있는 것에 반해 Normalize의 경우는 초기화는 시키지만 어느 정도 스타일이 가미되어 있다.


## Reset CSS

- 브라우저간의 차이을 최대한 없애서 여백이나 글자를 초기화 시킨 상태에서 디자인을 만들어 나가기 위해 생겨난 것입니다.

- 설정되어있는 모든 속성(에이전트 스타일)을 초기화 시키는 목적으로 사용이 된다.

- 리셋(reset)이라는 개념은, 모든 브라우저에서 통일된 화면을 볼 수 있도록 기본값을 처음부터 초기화시킨다는 의미입니다.

- 웹 초기에 reset이라는 개념이 잡히기 전에는 전역 셀렉트인 `*`로 초기화 시키는 방법을 많이 사용했었습니다.

```css
/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */
html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}
```
    - orientation 이란 휴대폰 가로 세로 화면 전환을 말한다.

    - 아이폰의 경우 뷰포트가 변경이 되면 자동으로 폰트 크기를 조절합니다.

    - 이걸 방지 하는 것이 `text-size-adjust`입니다.

    - `100%`는 폰트 크기를 명시적으로 100%를 주어 모든 디바이스에서 동일하게 보여주게 하는 방식입니다.

`:focus { outline : 0 }` 은 접근성 관점에서는 바람직하지 않는다 이유는 탭으로 했을경우 어떤 것인지 구별이 안되기 때문이다.

- `outline`을 없애라면 다른 방법으로 시각적으로 표시해야한다.

- `*`는 모든 요소를 한꺼번에 적용할때 사용하지만 우선순위는 낮다. 그리고 성능상 이슈가 생길수도 있다.

- `ul`은 기본적으로 `padding`을 가지고 있다.

- `fieldset`은 기본적으로 `border`가 설정이 되어있다.

- HTML은 화면을 그리기전에 Dom Tree를 구성하며 그 안에 head , body 요소를 가진다.

- Dom Tree 에서는 노드라는 개념을 사용한다 childNode , parentNode ,

- `class`속성을 가진 것을 속성 노드라고 부른다.

### `line-height`

```css
body {
	line-height: 1;
}
```
    - 줄 높이를 정하는 속성입니다.

        1. length : 길이로 줄 높이를 정합니다. (em단위)

        1. number : 글자 크기의 몇 배인지로 줄 높이를 정합니다.
    
```css
div { line-height: 1.2;   font-size: 10pt; } 
```

    - 만약 `font-size`가 40px 일때 `line-height`의 값을 1.5로 하면 줄 높이는 40의 1.5배인 60px이 됩니다. 
    - 줄높이는 60px인데 글자 크기는 40px이므로 , 글자 위와 아래에 각각 10px의 여백이 생깁니다. 
    - 줄 높이가 글자 크기보다 작으면 세로 방향으로 글자가 겹치게 됩니다.
    - 0을 주면 줄 사이가 붙어서 가독성이 매우 떨어진다. 가독성을 위해서 1.6 이 좋다.
    - 한글인 경우 값이 1일때 글자가 잘릴 수 있으므로 1.15 나 1.1을 사용한다.

### `font-size`

- `font-size`의 default 값은 16픽셀이며 모바일은 14픽셀이다.

- em 은 상속받은 `font-size`의 곱하기하는 것이다.

- `font-size : inherit` 하면 상속이 된다.
    
    **주의사항**
    ```css
    div { font-size : 2em; }
    ```
    
    - 모든 `font-size : 2em` 이라고 하면 이러한 문제점이 발생할수 있다.

    ```html
    <div font-size:32px>
        <div font-size:64px;>
            <div font-size:128px;>
            </div>
        </div>
    </div>
    ``` 
- rem 은 최상위 html 태그로 부터 상속을 받는다.
    - 만약 `html { font-size : 10px; }` 일때 `.logo { font-size : 2rem}`이라고 하면 `font-size`는 20픽셀이다.

### HTML5에 새롭게 추가된 태그의 문제점

- 새롭게 추가된 태그들은 익스 9 밑으로는 인식하지 못한다. 모르는 요소가 존재하면 인라인 박스로 처리한다.

```css
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
```

- 그래서 `display:block`을 한다.

- `main`태그는 익스 11에서 인식하지 못한다.

- 익스 9 밑으로는 자바스크립트로 처리를 해야한다. [html5shiv.js]로 크리에이트 엘리먼트를 하면 된다.

- - -

### `list-style`

```css
ol, ul {
	list-style: none;
}
```
- 기존 에이전트 설정인 리스트 스타일을 초기화 시키는 것이다.

- 하지만 ol태그는 넘버링이 사라지면 음성브라우저에서는 몇번쨰인지 모르기 떄문에 접근성 관점에서는 ol의 리스트 스타일은 건들이지 않는다.

### `table`

- `table`은 2차원 형태의 표를 말한다. 행은 `tr` table row 의 의미이며 `th`는 table header 의 의미이며 제목을 뜻한다. `td`는 테이블 데이터를 말한다.

```css
table {
	border-collapse: collapse;
	border-spacing: 0;
}
```

- `table`은 기본적으로 테두리가 생기고 여백이 띄어진다 이것을 cell spacing 이라고 한다.
- 셀 스페이싱을 없애라면은 `border spacing`을 0으로 만들면 사라진다 하지만 이슈가 발생한다.

- 1픽셀로 할시 첫번째 셀 기준으로 bottom , 두번쨰 셀의 top 각각 1픽셀씩 생겨서 2픽셀이 된다.

- `border-collapse : collapse`를 사용하면 1픽셀 , 1픽셀이 합쳐져서 1픽셀이 된다.

- - -    

## Normalize CSS

- Reset CSS 와 비슷한 기능을 하지만 속을 들여다 보면 조금 다르다.

- Normalize CSS 는 HTMl 요소의 기본 스타일을 브라우저 간 일관성을 유지하도록 돕는 CSS 파일이다.

### Normalize CSS 특징

- 브라우저(모바일 브라우저포함)를 광범위하게 지원하며 , HTML5 요소 , 타이포그래피 , 목록 , embeded 콘텐츠 , 폼과 테이블을 일관성있게 통일시키는 CSS를 포함한다.

- 다른 CSS reset과는 달리 사용하기 좋은 기본값들을 유지한다.
- HTML 요소의 다양한 스타일을 정규화한다.
- 버그 및 브라우저 간 차이점을 수정한다.
- 부분적인 개선과 가용성을 향상시킨다.
- 코드에 대한 자세한 주석이 달려 이해를 돕는다.


- reset에서 속성을 `font-size: 100%`등으로 전체 사이트의 폰트를 통일 시키는 것과 다르다는 것을 확인 할 수 있다.

```css
h1 {
    font-size : 2em;
    margin : 0.67em 0;
}
```

**Normalize 사용시 주의사항**

- reset 보다는 디자인적 요소가 가미되어있기때문에 진행하는 프로젝트에 미치는 범위를 미리 파악하시는게 좋습니다.

- - -

## CSS 코드

[Eric Meyer’s “Reset CSS” 2.0](https://cssreset.com/scripts/eric-meyer-reset-css/)

[normalize](https://cdnjs.com/libraries/normalize)