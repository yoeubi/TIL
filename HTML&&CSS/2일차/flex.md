# FLEX

![flex-container](https://css-tricks.com/wp-content/uploads/2014/05/flex-container.svg)

![flex-items](https://css-tricks.com/wp-content/uploads/2014/05/flex-items.svg)

- flex할 아이템들의 부모 요소에 `display:flex`라고 정의한다.

```css
.container {
display: flex; /* or inline-flex */
}
```

- 오직 직계 자식 요소들만 flex item이 된다 자식 요소 안의 요소들은 포함되지 않는다.

- `height`는 부모의 `height`만큼 늘어난다. `width`는 content 만큼 가진다.

## `flex-direction`

![flex-direction](https://css-tricks.com/wp-content/uploads/2013/04/flex-direction2.svg)

- `flex-direction`의 값에 따라 메인축과 교차축이 결정된다.

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

## `flex-wrap`

![flex-wrap](https://css-tricks.com/wp-content/uploads/2014/05/flex-wrap.svg)

- 기본으로는 flex item들이 한 라인에 정렬이 된다. 이것들을 감쌀수 있게 바꿀 수 있다.

```css
.container{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

- `nowrap`(default) : 모든 아이템들이 한 라인에 있다

- `wrap` : flex item들이 다중 라인으로 감싸질 것이다 top에서 bottom으로 

- `wrap-reverse` :  flex item들이 다중 라인으로 감싸질 것이다. bottom에서 top으로 

## `flex-flow`

- `flex-direction` , `flex-wrap`의 속기형이다.

```css
flex-flow: <‘flex-direction’> || <‘flex-wrap’>
```

## `justify-content`

![justify-content](https://css-tricks.com/wp-content/uploads/2013/04/justify-content-2.svg)

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}
```

- 메인축 정렬이다

- `flex-start`(default) : flex item들이 start라인부터 시작한다.

- `flex-end` : end라인부터 시작한다.

- `center` : 가운데 정렬되어 있다.

- `space-between` : 첫번째 flex item은 start 라인 마지막 item은 end라인에 있다.

- `space-around` : item들을 동일한 공간으로 감싼다. 

- `space-evenly` : 두 item간의 같은 공간을 가진다.

## `align-items`

![align-item](https://css-tricks.com/wp-content/uploads/2014/05/align-items.svg)

```css
.container {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

- flex item들을 교차죽 정렬한것이다.

- `baseline` : item들이 baseline 정렬을 한다.

- `stretch`(default) : container의 높이만큼 늘인다.

## `align-content`

![align-content](https://css-tricks.com/wp-content/uploads/2013/04/align-content.svg)

```css
.container {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

- flex container의 라인 여러줄일때 사용한다.

## `align-self`

![align-self](https://css-tricks.com/wp-content/uploads/2014/05/align-self.svg)

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

- flex item 하나만 정렬 할때 사용한다.

## `order`

![order](https://css-tricks.com/wp-content/uploads/2013/04/order-2.svg)

```css
.item {
  order: <integer>; /* default is 0 */
}
```

- `order` 속성은 flex item의 순서를 조정하는 속성이다.

- `order`의 default 값은 0이다. 0보다 작으면 맨 앞쪽으로 가고 0보다 크면 뒤로간다.

- 같은 0번이면 마크업한 순서대로 그려진다.

## `flex-grow`

![flex-grow](https://css-tricks.com/wp-content/uploads/2014/05/flex-grow.svg)

```css
.item {
  order: <integer>; /* default is 0 */
}
```

- flex item이 확대가 되는 속성이다..

- `flex-grow : 1` 이면 flex item들이 동일한 크기를 가지게 된다.

- `flex-grow : 2` 이면 다른 flex item 보다 남은 공간을 2배 가지게 된다.

## `flex-shrink`

```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```

- flex item이 축소되는 속성이다.

## `flex-basis`

```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```

- flex item 의 가로 크기를 결정하는 것이다.

## `flex`

```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

- `flex-grow` , `flex-shrink` , `flex-basis` 의 속기형이다.
