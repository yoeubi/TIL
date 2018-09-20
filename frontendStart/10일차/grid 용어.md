# grid 용어 정리

## grid 

html 요소에 `display` 속성 값으로 `grid`를 설정하면 그리드 컨테이너가 되며 ,`row`(행)와 `column`(열)을 가진다. (포함된 자식 요소는 그리드 아이템이 된다.)

## grid line

- 그리드를 그리는 가로/세로 선을 말한다.

## grid track

수직/수평 2개의 `grid line` 사이 연속된 공간을 `grid track`이라고 한다.(`row` 또는 `column`으로 이해할 수 있다.)

## grid cell

- 4개의 `grid line`이 모여 그려지는 공간이 `grid cell`이다.(유닛으로 부르기도 한다.)

## grid area

- 4개의 `grid line`이 모여 그려지는 공간으로 `cell`이 묶인 영역을 `grid area` 라고 한다.

## grid gutters

- `row` , `column` 사이 간격을 `grid gutter`라고 하며 방향에 따라 `row gutter`, `column gutter`로 나울 수 있다.(`grid-gap` 속성으로 제어한다)

- - -

# 정리

- `grid container`란 `flex` 처럼 부모영역에 `grid`라고 설정했을때 `grid container`가 된다 내부 직계자식은 `grid item`이 된다.
- 격자가 형성되는데 그 격자는 `grid line`으로 이루어져있고 순서(1,2,3,...)를 가지고 있다.
- `grid line` 과 `grid line` 사이의 공간을 `grid track`이라고 하고 작은 단위 유닛을 `grid cell`이라고 한다. 
- `grid cell` 과 `grid cell` 사이를 gap이라고 한다.
