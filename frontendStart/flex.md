# FLEX

## FLEX 컨테이너 VS FLEX 아이템

FLEX 컨테이너에 `display: flext` 하면 자식태그 들이 FLEX 아이템이 된다.

### `flex-direction`

- 주축의 방향을 설정한다.
- default 값은 `row`이다.
- `row`일시 모든 아이템들이 행을 기준으로(수평으로) 배치가 된다.
- `column`은 모든 아이템이 열로 배치가 된다.

```css
.flex-container {
    flex-direction : row | row-reverse | column | column-reverse
}
```

### `justify-content`

- 주축에 대한 정렬이다.

```css
.flex-container {
    justify-content : flex-start | center | flex-end |
                        space-between | space-around | space-evenly
}
```
- `space-between` : 요소 사이의 공간 설정
- `space-around` : 요소를 감싸는 설정
- `space-evenly` : 요소 사이를 균등하게 분할

#### `축`이란?

- 행을 기준으로 주축이라고 말한다.
- 시작 부분을 `start` 중간을 `center` 끝 부분 `end`라고 한다.

## FLEX의 장점

1. `float`인 경우 부모요소가 자식요소를 감싸지 못해서 `clear:both`를 써야했다
1. 자동으로 `margin`이 계산이 된다.

- - -

### flex-wrap

- default 값이 `nowrap` 이다 만약 flex-item의 `width`가 부모요소의 `width` 보다 크다면 넘쳐나게 된다.
- `wrap`을 설정시 넘쳐나는 부분은 아래도 떨어진다.
- 부모의 높이가 있을떄 변한다

*주의 사항*
- 자식의 width를 부모의 width 보다 크게 설정해도 바뀌지 않는다.
- 이유는 `flex-shrink` 의 default 값이 1이다.
- `width`가 설정되어 있더라도 flex-item의 경우 default 값이 1로 설정되어 있어서 폭의 상관없이 부모 컨테이너의 width에 맞게 자동으로 줄어든다.

### flex-shrink

- `flex-shrink` 를 0으로 주면 width가 줄어들지 않는다.

### flex-grow

- 요소의 크기를 자동으로 크게 만든다. 
- `flex-grow`의 default 값은 0 이다 1로 바꾸면 자동으로 늘어나서 맞추어진다.

### FLEX 아이템

- flex item들은 `width`를 쓰지 않고 `flex-basis`를 쓴다 만약 100px로 하면 이게 이 요소의 width 값이다.

### flex-grow , flex-shrink , flex-basis 의 속기형

```css
flex : grow shrink basis
```

### wrap-reverse

- 요소간의 순서가 바뀌는게 아니라 덩어리가 위에서 아래로 아래에서 위로바뀐다.

### align-content 

- 교차축에 대한 정렬이다.
- default 값이 `stretch`이다 

- - - 

## 가운데 배치 

1. 박스에 `position : absolute` 부모는 `position:relative`를 주고 `top : 50% ` `left : 50% ` 한 다음 박스의 `width` 와 `height`의 절반만큼 `maring-left`와 `margin-top`에 넣어서 가운데 배치를 했다.

1. 블럭 박스 안에 인라인 컨텐츠를 `text-align : center` 하면 가운데 배치가 되지만 수직에 대한 정렬이 안된다.

*주의 사항*
- `vertical-align`은 테이블 cell요소 , 인라인 요소만 가능하다 블록 은 불가능하다 하지만 `line-height`를 박스 높이와 맞추면 가운데 정렬이 된다 히지만 컨텐츠가 늘어난다면 똑같은 글주 간격이 생겨서 제대로 된 정렬이라고 할 수 없다.

- `justify-content : center` 하면 된다. 
- `align-items : center` 하면 된다.

- 플럭스 아이템들에도 `display: flex`를 줄수 있다 그러면 그안에 있는 텍스트가 아이템이 된다.

- `flex-content`는 덩이리 이며 `flex-items`는 개별 아이템을 배치 할때 쓴다.
- `flex-content`는 덩어리로 그룹을 제어하는것
- `flex-items`는 아이템 개별적으로 제어하는 것 default 값이 `stretch`이다.

- `baseline`은 글자의 라인을 baseline이라고 하는데 그 선 위로 글자를 맞추는 것이다.

*주의 사항*
- `justify-content`는 `stretch`가 없다 대신에 플렉스 아이템요소에 `grow` 값을 1로 주면 자동으로 늘어나게 된다 .

### flex-direction , flex-wrap 의 속기형

`flex-flow : direction wrap`;

- - - 

## order 

- 플렉스 아이템의 순서를 설정할수 있다 .
- default 값으로 0이다.
- 맨 뒤의 것을 앞으로 옮길려면 -1을 주면 된다.
- 앞의 것을 뒤로 보낼려면 0보다 큰 수를 주면 된다.

### 아이템 설정

- 아이템을 가득 채울라면 `flex-grow` 를 쓴다.
- 높이를 설정하지 않는다면 기본값이 `stretch`가 된다.
- `flex : grow[필수], [shrink , flex-basis][옵션]` 기본값이 0 , 1, auto이다.

- `flex-basis`가 50% 이면 부모영역의 50%를 차지한다.
- `flex-grow`를 1을 주면 나머지 공간을 채우게 된다.
- 만약 두 자식의 `width`가 부모보다 크다면 넘친다.
- 하지만 `flex-shrink`를 쓴다면 자기 `width`가 아니라 남는 공간을 채우는 형태가 된다.


## align-self

- 자기 자신에게만 설정하는 것이다 다른 자식들과 상관없이
- default 값이 `auto` 이다.

*주의사항*
- align-item은 자식들에게 일괄적으로 제어하는 것이다.
- 다른 플렉스 아이템 보다 공간을 더 줄라면 `flex : 2 0 20px`라고 2값을 주면 된다.